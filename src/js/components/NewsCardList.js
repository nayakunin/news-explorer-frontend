export default class NewsCardList {
  constructor() {
    this.cardsArray = [];
    this.keyWord = '';

    this._addCard = this._addCard.bind(this);
    this.addCards = this.addCards.bind(this);
    this.getFromArrayByIndex = this.getFromArrayByIndex.bind(this);
    this.removeFromArrayByIndex = this.removeFromArrayByIndex.bind(this);
    this.clearResult = this.clearResult.bind(this);
  }

  clearResult() {
    this.cardsArray = [];
  }

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
