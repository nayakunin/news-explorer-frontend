import NewsCardList from './NewsCardList';

export default class MainPageNewsCardList extends NewsCardList {
  constructor() {
    super();
    [this.state] = document.getElementsByClassName('results');
    [this.container] = document.getElementsByClassName('results__cards-container');
    [this.showMoreBtn] = document.getElementsByClassName('results__button');

    this.initialRender = this.initialRender.bind(this);
    this.removeAllStates = this.removeAllStates.bind(this);
    this.renderResult = this.renderResult.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  initialRender() {
    this.state.classList.remove('results_hidden');
    this.state.classList.remove('results_loading');
    this.clearResult();
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
}
