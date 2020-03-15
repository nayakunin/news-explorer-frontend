export default class Search {
  constructor() {
    [this.searchForm] = document.getElementsByClassName('search__input-container');
    this._input = this.searchForm.search;
    [this.btn] = this.searchForm.getElementsByClassName('search__button');
  }

  inputValid() {
    return !!this._input.value.length;
  }

  get input() {
    return this._input.value;
  }
}
