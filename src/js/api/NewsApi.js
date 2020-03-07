import NewsApiOptions from '../constants/NewsApi.json';

class NewsApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.language = options.language;
    this.apiKey = options.apiKey;
    this.pageCounter = 1;
    this.prevKeyWord = null;
  }

  getNews(keyWord) {
    if (!this.prevKeyWord) {
      this.prevKeyWord = keyWord;
    } else if (this.prevKeyWord !== keyWord) {
      this.prevKeyWord = keyWord;
      this.pageCounter = 1;
    }
    const url = `${this.baseUrl}q=${keyWord}&language=${this.language}&sortBy=relevancy&pageSize=3&page=${this.pageCounter}&apiKey=${this.apiKey}`;
    this.pageCounter += 1;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data.articles.map((article) => ({
        author: article.source.name,
        title: article.title,
        date: article.publishedAt,
        description: article.description,
        url: article.urlToImage,
      })))
      .catch((err) => {
        console.error(err);
      });
  }
}

export default new NewsApi(NewsApiOptions);
