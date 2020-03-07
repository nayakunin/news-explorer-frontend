import NewsApi from '../api/NewsApi';
import NewsCard from './NewsCard';

class NewsCardList {
  constructor() {
    [this.state] = document.getElementsByClassName('results');
    [this.container] = document.getElementsByClassName('results__cards-container');
    this.cardsArray = [];
    [this.showMoreBtn] = document.getElementsByClassName('results__button');
    this.keyWord = '';

    this.initialRender = this.initialRender.bind(this);
    this.clearResult = this.clearResult.bind(this);
    this.removeAllStates = this.removeAllStates.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
    this.renderError = this.renderError.bind(this);
    this.showMore = this.showMore.bind(this);
    this.addCard = this.addCard.bind(this);

    this.showMoreBtn.addEventListener('click', this.showMore);
  }

  async initialRender(keyWord) {
    this.clearResult();
    this.keyWord = keyWord;
    this.renderLoader();
    const newCards = await NewsApi.getNews(this.keyWord);
    if (!newCards.length) {
      this.renderError();
    } else {
      newCards.forEach((card) => {
        this.addCard(card);
      });
      this.renderResult();
    }
  }

  clearResult() {
    this.cardsArray = [];
  }

  removeAllStates() {
    this.state.classList.remove('results_hidden');
    this.state.classList.remove('results_loading');
    this.state.classList.remove('results_found');
    this.state.classList.remove('results_nothing-found');
  }

  renderResult() {
    this.removeAllStates();
    this.state.classList.add('results_found');
    this.container.innerHTML = this.cardsArray.reduce((acc, card) => acc + card.markup, '\n');
  }

  renderLoader() {
    this.removeAllStates();
    this.state.classList.add('results_loading');
  }

  renderError() {
    this.removeAllStates();
    this.state.classList.add('results_nothing-found');
  }

  async showMore() {
    const newCards = await NewsApi.getNews(this.keyWord);
    newCards.forEach(this.addCard);
    this.renderResult();
  }

  addCard(cardOptions) {
    this.cardsArray.push(new NewsCard(cardOptions));
  }
}

export default new NewsCardList();
