import NewsApiOptions from '../constants/NewsApi.json';

class NewsApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.language = options.language;
    this.apiKey = options.apiKey;
    this.pageCounter = 1
    this.prevKeyWord = null;
  }

  getNews(keyWord) {
    if (!this.prevKeyWord) {
      this.prevKeyWord = keyWord;
    } else if (this.prevKeyWord !== keyWord) {
      this.prevKeyWord = keyWord;
      this.pageCounter = 1;
    }
    const url =
      `${this.baseUrl}q=${keyWord}&language=${this.language}&sortBy=relevancy&pageSize=3&page=${this.pageCounter}&apiKey=${this.apiKey}`;
    this.pageCounter++;
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.articles.map((article) => {
          return {
            author: article.source.name,
            title: article.title,
            date: article.publishedAt,
            description: article.description,
            url: article.urlToImage,
          };
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }
}

// source: {id: "lenta", name: "Lenta"}
// author: null
// title: "Сурков оценил Зеленского фразой «не лох»"
// description: "Бывший помощник президента России Владислав Сурков оценил украинского лидера Владимира Зеленского фразой «не лох». Об этом он рассказал в интервью изданию «Актуальные комментарии». По его словам, на саммите «нормандской четверки» в Париже, который прошел 9 де…"
// url: "https://lenta.ru/news/2020/02/26/ne_lox/"
// urlToImage: "https://icdn.lenta.ru/images/2020/02/26/09/20200226092100682/detail_9b887bd0007a062621a720833a62cf0e.jpg"
// publishedAt: "2020-02-26T06:20:00Z"
// content: ""

export default new NewsApi(NewsApiOptions);