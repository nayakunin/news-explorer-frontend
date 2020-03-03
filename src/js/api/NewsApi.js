export default class NewsApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.language = options.language;
    this.apiKey = options.apiKey;
    this.pageCounter = 1
  }

  getNews(keyWord) {
    const url =
      `${this.baseUrl}q=${keyWord}&language=${this.language}&sortBy=relevancy&pageSize=3&page=${this.pageCounter}&apiKey=${this.apiKey}`;
    this.pageCounter++;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      })
  }
}