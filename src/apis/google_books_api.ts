import { apiGet, BaseBooksApiImpl } from '@apis/base_api';
import { Book } from '@models/book.model';
import { GoogleBooksResponse, Item, VolumeInfo } from './models/google_books_response';

export class GoogleBooksApi implements BaseBooksApiImpl {
  private static readonly MAX_RESULTS = 40;
  private static readonly PRINT_TYPE = 'books';

  constructor(
    private readonly localePreference: string,
    private readonly apiKey?: string,
  ) {}

  private getLanguageRestriction(local: string): string {
    return local === 'default' ? window.moment.locale() : local;
  }

  private buildSearchParams(query: string, options?: Record<string, string>): Record<string, string | number> {
    const params: Record<string, string | number> = {
      q: query,
      maxResults: GoogleBooksApi.MAX_RESULTS,
      printType: GoogleBooksApi.PRINT_TYPE,
      langRestrict: this.getLanguageRestriction(options?.locale || this.localePreference),
    };

    if (this.apiKey) {
      params['key'] = this.apiKey;
    }
    return params;
  }

  async getByQuery(query: string, options?: Record<string, string>): Promise<Book[]> {
    try {
      const params = this.buildSearchParams(query, options);
      const searchResults = await apiGet<GoogleBooksResponse>('https://www.googleapis.com/books/v1/volumes', params);
      if (!searchResults?.totalItems) return [];
      // This is a lot of requests. It would be better to only call getById on
      // the user-selected book, but that would require a lot of changes to pass
      // through the volume ID, and leak Google-specific implementation.
      return Promise.all(searchResults.items.map(({ id }) => this.getById(id)));
    } catch (error) {
      console.warn(error);
      throw error;
    }
  }

  // Getting a specific volume provides additional image fields for the book cover
  async getById(id: string): Promise<Book> {
    try {
      const result = await apiGet<Item>(`https://www.googleapis.com/books/v1/volumes/${id}`, { key: this.apiKey });
      return this.createBookItem(result.volumeInfo);
    } catch (error) {
      console.warn(error);
      throw error;
    }
  }

  private extractISBNs(industryIdentifiers: VolumeInfo['industryIdentifiers']): Record<string, string> {
    return (
      industryIdentifiers?.reduce(
        (result, item) => {
          const isbnType = item.type === 'ISBN_10' ? 'isbn10' : 'isbn13';
          result[isbnType] = item.identifier.trim();
          return result;
        },
        {} as Record<string, string>,
      ) ?? {}
    );
  }

  private extractBasicBookInfo(item: VolumeInfo): Partial<Book> {
    return {
      title: item.title,
      subtitle: item.subtitle,
      author: this.formatList(item.authors),
      authors: item.authors,
      category: this.formatList(item.categories),
      categories: item.categories,
      publisher: item.publisher,
      totalPage: item.pageCount,
      // Always provide the largest possible image
      coverUrl: this.convertUrlToTls(
        item.imageLinks?.extraLarge ||
          item.imageLinks?.large ||
          item.imageLinks?.medium ||
          item.imageLinks?.small ||
          item.imageLinks?.thumbnail ||
          item.imageLinks?.smallThumbnail ||
          '',
      ),
      coverSmallUrl: this.convertUrlToTls(item.imageLinks?.smallThumbnail ?? ''),
      publishDate: item.publishedDate || '',
      description: item.description,
      link: this.convertUrlToTls(item.canonicalVolumeLink || item.infoLink),
      previewLink: this.convertUrlToTls(item.previewLink),
    };
  }

  public createBookItem(item: VolumeInfo): Book {
    const book: Book = {
      title: '',
      subtitle: '',
      author: '',
      authors: [],
      category: '',
      categories: [],
      publisher: '',
      publishDate: '',
      totalPage: '',
      coverUrl: '',
      coverSmallUrl: '',
      description: '',
      link: '',
      previewLink: '',
      ...this.extractBasicBookInfo(item),
      ...this.extractISBNs(item.industryIdentifiers),
    };
    return book;
  }

  public formatList(list?: string[]): string {
    return list && list.length > 1 ? list.map(item => item.trim()).join(', ') : list?.[0] ?? '';
  }

  public convertUrlToTls(url: string): string {
    return url.replace(/^http:\/\//, 'https://');
  }

  static convertGoogleBookImageURLSize(url: string, zoom: number) {
    return url.replace(/(&zoom)=\d/, `$1=${zoom}`);
  }
}
