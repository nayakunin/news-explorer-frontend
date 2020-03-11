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
    this.state.classlist.add('saved-articles__results_empty');
  }

  hideEmpty() {
    this.state.classlist.remove('saved-articles__results_empty');
  }

  renderResult() {
    this.container.insertAdjacentHTML('afterbegin', this.cardsArray.reduce((acc, card) => acc + card.markup, '\n'));
  }

  removeById(cardId) {
    document.getElementById(cardId).remove();
  }
}
