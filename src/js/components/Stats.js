import parseArticleCounter from '../utils/parseArticleCounter';
import capitalize from '../utils/capitalize';
import parseKeyWordCouner from '../utils/parseKeyWordCounter';

export default class Stats {
  constructor() {
    [this.stats] = document.getElementsByClassName('saved-articles__stats-container');
    [this.userName] = this.stats.getElementsByClassName('username');
    [this.articleCounterContiner] = this.stats.getElementsByClassName('saved-articles__article-counter');
    [this.frequentKeyWordsContainer] = this.stats.getElementsByClassName('saved-articles__themes-first');
    [this.keyWordCounterContainer] = this.stats.getElementsByClassName('saved_articles__themes-counter');
  }

  setUserName(newName) {
    this.userName.innerHTML = capitalize(newName);
  }

  setCounter(number) {
    this.articleCounterContiner.innerHTML = parseArticleCounter(number);
  }

  setFrequentKeyWords(...rest) {
    const str = rest.reduce((acc, curr) => `${acc + capitalize(curr)}, `, '').slice(0, -2);
    this.frequentKeyWordsContainer.innerHTML = str;
  }

  setKeyWordCounter(number) {
    this.keyWordCounterContainer.innerHTML = parseKeyWordCouner(number);
  }
}
