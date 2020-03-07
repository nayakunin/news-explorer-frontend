import NewsCardList from './NewsCardList';

export default class Search {
  constructor() {
    [this.searchForm] = document.getElementsByClassName('search__input-container');
    this.input = this.searchForm.search;
    [this.btn] = this.searchForm.getElementsByClassName('search__button');
    this.btn.addEventListener('click', this.buttonHandler.bind(this));
  }

  buttonHandler(event) {
    event.preventDefault();
    if (this.input.value.length) {
      NewsCardList.initialRender(this.input.value);
    }
  }
}
