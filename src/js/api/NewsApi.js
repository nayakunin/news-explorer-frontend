export default class NewsApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._language = options.language;
    this._apiKey = options.apiKey;
    this._pageCounter = 1;
    this._keyWord = '';

    this._loadCards = this._loadCards.bind(this);
  }

  _loadCards() {
    const url = `${this._baseUrl}q=${this._keyWord}&language=${this._language}&sortBy=relevancy&pageSize=3&page=${this._pageCounter}&apiKey=${this._apiKey}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data.articles.map((article) => ({
        keyword: this._keyWord,
        author: article.source.name,
        title: article.title,
        date: article.publishedAt,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
      })))
      .catch((err) => {
        console.error(err);
      });
  }

  async getNews(keyWord) {
    this._pageCounter = 1;
    this._keyWord = keyWord;
    const results = await this._loadCards();
    this._pageCounter += 1;
    return results;
  }

  async showMore() {
    this._pageCounter += 1;
    const results = await this._loadCards();
    return results;
  }
}
