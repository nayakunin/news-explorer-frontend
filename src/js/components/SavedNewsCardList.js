import NewsCardList from './NewsCardList';

export default class SavedNewsCardList extends NewsCardList {
  constructor() {
    super();
    [this.state] = document.getElementsByClassName('saved-articles__results');
    [this.container] = document.getElementsByClassName('saved-articles__cards-container');

    this.showEmpty = this.showEmpty.bind(this);
    this.hideEmpty = this.hideEmpty.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  showEmpty() {
    this.state.classList.add('saved-articles__results_empty');
  }

  hideEmpty() {
    this.state.classList.remove('saved-articles__results_empty');
  }

  renderResult() {
    this.cardsArray.forEach((card) => {
      this.container.insertAdjacentHTML('beforeend', card.markup);
    });
  }
}
