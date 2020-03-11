export default class NewsCardList {
  constructor() {
    // [this.state] = document.getElementsByClassName('results');
    // [this.container] = document.getElementsByClassName('results__cards-container');
    this.cardsArray = [];
    // [this.showMoreBtn] = document.getElementsByClassName('results__button');
    this.keyWord = '';

    // this.initialRender = this.initialRender.bind(this);
    // this.clearResult = this.clearResult.bind(this);
    // this.removeAllStates = this.removeAllStates.bind(this);
    // this.renderResult = this.renderResult.bind(this);
    // this.renderLoader = this.renderLoader.bind(this);
    // this.renderError = this.renderError.bind(this);
    this._addCard = this._addCard.bind(this);
    this.addCards = this.addCards.bind(this);
    this.getFromArrayByIndex = this.getFromArrayByIndex.bind(this);
    this.removeFromArrayByIndex = this.removeFromArrayByIndex.bind(this);
    this.clearResult = this.clearResult.bind(this);
  }

  // initialRender() {
  //   this.state.classList.remove('results_hidden');
  //   this.state.classList.remove('results_loading');
  //   this.clearResult();
  // }

  clearResult() {
    this.cardsArray = [];
  }

  // removeAllStates() {
  //   this.state.classList.remove('results_hidden');
  //   this.state.classList.remove('results_loading');
  //   this.state.classList.remove('results_found');
  //   this.state.classList.remove('results_nothing-found');
  // }

  // renderResult() {
  //   this.removeAllStates();
  //   this.state.classList.add('results_found');
  //   this.container.innerHTML = this.cardsArray.reduce((acc, card) => acc + card.markup, '\n');
  // }

  // renderLoader() {
  //   this.removeAllStates();
  //   this.state.classList.add('results_loading');
  // }

  // renderError() {
  //   this.removeAllStates();
  //   this.state.classList.add('results_nothing-found');
  // }

  addCards(cardArray) {
    cardArray.forEach((card) => {
      this._addCard(card);
    });
  }

  _addCard(card) {
    this.cardsArray.push(card);
  }

  get length() {
    return this.cardsArray.length;
  }

  getFromArrayByIndex(i) {
    return this.cardsArray[i];
  }

  removeFromArrayByIndex(i) {
    this.cardsArray.splice(i, 1);
  }
}
