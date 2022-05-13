# Obsidian Book Search Plugin


## Demo
![May-05-2022 18-01-01](https://user-images.githubusercontent.com/3969643/166892687-d36868ef-f966-41af-9bb1-88e17ea5753f.gif)

- [옵시디언 책 검색 플러그인 사용방법](https://steemit.com/hive-101145/@anpigon/20220407t124549019z)

<br>

## Description

Use to query book using :

- A book title, author, publisher or ISBN (10 or 13).

Use Google Books API to get the book information.

<br>

## How to use

1. Set the folder to new file location in plugin options. And you can also add a frontmatter that is inserted when creating a note.
   ![](https://user-images.githubusercontent.com/3969643/162614248-c60baab1-ef26-4f68-bf78-d0bc462e6c41.png)

2. Excute the command "Create new book note".
   ![](https://user-images.githubusercontent.com/3969643/161973483-ab007598-e0b8-433f-9697-75ee0ef74195.png)

3. Search for books by keywords.
   ![](https://user-images.githubusercontent.com/3969643/161973979-51f642c9-626a-4015-a7e9-dfdbe6ec2cbc.png)

4. Select the book from the search results.
   ![](https://user-images.githubusercontent.com/3969643/161974310-13c3b39b-51dc-472f-b787-db64f74caf74.png)

5. Voila! A note has been created.
   ![](https://user-images.githubusercontent.com/3969643/161974593-1b7bfe69-cb9d-47d7-a43d-1d725295a122.png)

<br>

## How to use settings

### Text to insert into front matter

You can add the following to the default Front Matter, or create a new Front Matter with the structure you want.

Use variable substitution syntax.

![](https://user-images.githubusercontent.com/3969643/168297106-27b887e9-be1b-492b-96a9-554696d84abe.png)

#### Example template

```
title: {{title}} - {{author}}
publisher: {{publisher}}
publish: {{publishDate}}
total: {{totalPage}}
isbn: {{isbn10}} {{isbn13}}
cover: {{coverUrl}}
```

<br>

### Text to insert into content
You can add text to the content for [Dataview inline metadata](https://blacksmithgu.github.io/obsidian-dataview/data-annotation/#pages).

![](https://user-images.githubusercontent.com/3969643/168297600-0ae37bef-7e26-4d06-9d91-2308f62b7b96.png)

#### Example template

```
# {{title}}

author:: {{author}}
publisher:: {{publisher}}
publishDate:: {{publishDate}}
totalPage:: {{totalPage}}
isbn10:: {{isbn10}}
isbn13:: {{isbn13}}

![cover]({{coverUrl}})
```

<br>

## Installation

Search in the Obsidian Community plugin. And install it.
![](https://user-images.githubusercontent.com/3969643/166097211-abb60f55-3d77-4de6-9e0d-b681f903aafc.png)

<br>

## License
[Obsidian Book Search Plugin](https://github.com/anpigon/obsidian-book-search-plugin) is licensed under the GNU AGPLv3 license. Refer to [LICENSE](https://github.com/SilentVoid13/Templater/blob/master/LICENSE.TXT) for more information.

<br>

## Contributing
Feel free to contribute.

You can create an [issue](https://github.com/anpigon/obsidian-book-search-plugin/issues) to report a bug, suggest an improvement for this plugin, ask a question, etc.

You can make a [pull request](https://github.com/anpigon/obsidian-book-search-plugin/pulls) to contribute to this plugin development.


