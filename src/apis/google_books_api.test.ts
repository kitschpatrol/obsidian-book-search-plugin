import { Book } from '@models/book.model';
import { GoogleBooksApi } from './google_books_api';
import { Type, VolumeInfo } from './models/google_books_response';

describe('Book creation', () => {
  const volumeInfo: VolumeInfo = {
    title: 'Flow',
    subtitle: 'The Psychology of Optimal Experience',
    authors: ['Mihaly Csikszentmihalyi'],
    publisher: 'Harper Collins',
    publishedDate: '2009-10-13',
    description:
      '\u003cp\u003e“Csikszentmihalyi arrives at an insight that many of us can intuitively grasp, despite our insistent (and culturally supported) denial of this truth. That is, it is not what happens to us that determines our happiness, but the manner in which we make sense of that reality. . . . The manner in which Csikszentmihalyi integrates research on consciousness, personal psychology and spirituality is illuminating.” —Los Angeles Times Book Review\u003c/p\u003e\u003cp\u003eThe bestselling classic that holds the key to unlocking meaning, creativity, peak performance, and true happiness. \u003c/p\u003e\u003cp\u003eLegendary psychologist Mihaly Csikszentmihalyi\'s famous investigations of "optimal experience" have revealed that what makes an experience genuinely satisfying is a state of consciousness called flow. During flow, people typically experience deep enjoyment, creativity, and a total involvement with life. In this new edition of his groundbreaking classic work, Csikszentmihalyi ("the leading researcher into ‘flow states’" —Newsweek) demonstrates the ways this positive state can be controlled, not just left to chance. Flow: The Psychology of Optimal Experience teaches how, by ordering the information that enters our consciousness, we can discover true happiness, unlock our potential, and greatly improve the quality of our lives.\u003c/p\u003e',
    industryIdentifiers: [
      {
        type: Type.Isbn10,
        identifier: '0061876720',
      },
      {
        type: Type.Isbn13,
        identifier: '9780061876721',
      },
    ],
    readingModes: {
      text: true,
      image: false,
    },
    pageCount: 336,
    printedPageCount: 439,
    dimensions: {
      height: '21.00 cm',
      width: '13.50 cm',
      thickness: '1.90 cm',
    },
    printType: 'BOOK',
    categories: [
      'Psychology / Creative Ability',
      'Psychology / Applied Psychology',
      'Psychology / Personality',
      'Social Science / Sociology / General',
      'Philosophy / Essays',
      'Education / Professional Development',
      'Self-Help / Emotions',
      'Self-Help / Self-Management / Time Management',
      'Science / Life Sciences / Neuroscience',
      'Self-Help / Spiritual',
    ],
    averageRating: 4.5,
    ratingsCount: 2,
    maturityRating: 'NOT_MATURE',
    allowAnonLogging: true,
    contentVersion: '1.4.3.0.preview.2',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=QVjPsd1UukEC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73bxh9ISs_hCP3iFSQQYhCYhYzF94fr4-iOEnjpXWXNIrz9C99HwbiJ_Zd4SG9dsbtuiEYOf5RbThhzxQwfmp-RuF5Tq7A6v8HQRI9MPuNPnVJ4yDUgx_mwIqHIPjGI4xfkcoiC&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=QVjPsd1UukEC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72WhlY_wNuhAcMKH7VQ9kA7Szp9vrShBx1foBuN8vk_Rtfqu9qsL8VqEsNlvgYtRpa3m3Uz10J88xWGa2N89O52gZwGrqYoZtbiH08qgm4W4DmVyZGtkkZbJx9TJeA8-5fDPklb&source=gbs_api',
      small:
        'http://books.google.com/books/content?id=QVjPsd1UukEC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73bZLNSGP2mwF6k55LuKqrCgrT6tdW_miYcG2sHGaxxS3FJn8-fOfetQzvusN6UapZ3phnw3g9SXPgkfLB2oLZzQHbvyClxQFS5RjHN71UOZXfgL_olCloyjELYT6lwnqeSkDxp&source=gbs_api',
      medium:
        'http://books.google.com/books/content?id=QVjPsd1UukEC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE73sOye1jSUObEr535Rgb9ILekCcNUlXcdX8zr5v9LclpHNNxV_bIuudDO1AbrjWK5NYbeiM6dPCg7TAKqgmMbjw8NRF8Pfz62kyli4kL-DiAHdBTb5zqs64G4GwcQtbOoAl3RAi&source=gbs_api',
      large:
        'http://books.google.com/books/content?id=QVjPsd1UukEC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73kA5HS38xadawt2z_aVDEF0ADyAoQEFb1UcrVgicPUxAqRRqz6LxIsNS1x7Ql9PLLwsaaR_8noe7eJ7NkDp3tayziL6XcHhGQhpTNsqSzT0piX7Pe_yzvy2z3lbJ4orzwgV3R9&source=gbs_api',
      extraLarge:
        'http://books.google.com/books/content?id=QVjPsd1UukEC&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE72nxJ9MV2P9lurK14G3PXpHEEmaIqKT9or7i_sci5KFr02kqrqLgqLAx5kXj4MJa9bHNdxSP8N1aN6cxtq0IhAFGVRUzlL2-ZNknDmt5dZQums9IXpNAm2xhLE70qXZNUvCMSnX&source=gbs_api',
    },
    language: 'en',
    previewLink: 'http://books.google.com/books?id=QVjPsd1UukEC&hl=&source=gbs_api',
    infoLink: 'https://play.google.com/store/books/details?id=QVjPsd1UukEC&source=gbs_api',
    canonicalVolumeLink: 'https://play.google.com/store/books/details?id=QVjPsd1UukEC',
  };

  const api: GoogleBooksApi = new GoogleBooksApi('default');
  const book: Book = api.createBookItem(volumeInfo);

  it('Title', () => {
    expect(book.title).toEqual(volumeInfo.title);
  });

  it('Subtitle', () => {
    expect(book.subtitle).toEqual(volumeInfo.subtitle);
  });

  it('Author', () => {
    expect(book.author).toEqual(api.formatList(volumeInfo.authors));
  });

  it('Category', () => {
    expect(book.category).toEqual(api.formatList(volumeInfo.categories));
  });

  it('Publisher', () => {
    expect(book.publisher).toEqual(volumeInfo.publisher);
  });

  it('Published date', () => {
    expect(book.publishDate).toEqual(volumeInfo.publishedDate);
  });

  it('Total pages', () => {
    expect(book.totalPage).toEqual(volumeInfo.pageCount);
  });

  it('Cover URL', () => {
    expect(book.coverUrl).toEqual(api.convertUrlToTls(volumeInfo.imageLinks.extraLarge));
  });

  it('Cover small URL', () => {
    expect(book.coverSmallUrl).toEqual(api.convertUrlToTls(volumeInfo.imageLinks.smallThumbnail));
  });

  it('Description', () => {
    expect(book.description).toEqual(volumeInfo.description);
  });

  it('Link', () => {
    expect(book.link).toEqual(api.convertUrlToTls(volumeInfo.canonicalVolumeLink));
  });

  it('Preview link', () => {
    expect(book.previewLink).toEqual(api.convertUrlToTls(volumeInfo.previewLink));
  });

  it('ISBN 10', () => {
    expect(book.isbn10).toEqual(volumeInfo.industryIdentifiers[0].identifier);
  });

  it('ISBN 13', () => {
    expect(book.isbn13).toEqual(volumeInfo.industryIdentifiers[1].identifier);
  });
});
