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
    const now = new Date();
    const from = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
    const url = `${this._baseUrl}q=${this._keyWord}&language=${this._language}&sortBy=relevancy&pageSize=3&page=${this._pageCounter}&from=${from.toISOString()}&to=${now.toISOString()}&apiKey=${this._apiKey}`;
    return fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.status);
        }
        return res.json();
      })
      .then((data) => data.articles.map((article) => ({
        keyword: this._keyWord,
        author: article.source.name,
        title: article.title,
        date: article.publishedAt,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
      })));
  }

  async getNews(keyWord) {
    this._pageCounter = 1;
    this._keyWord = keyWord;
    try {
      const results = await this._loadCards();
      this._pageCounter += 1;
      return results;
    } catch (err) {
      console.log(err);
    }
    return [];
  }

  async showMore() {
    try {
      const results = await this._loadCards();
      this._pageCounter += 1;
      return results;
    } catch (err) {
      console.log(err);
    }
    return [];
  }
}
