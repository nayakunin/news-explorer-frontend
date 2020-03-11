import parseArticleCounter from '../utils/parseArticleCounter';
import capitalize from '../utils/capitalize';
import parseKeyWordCouner from '../utils/parseKeyWordCounter';

export default class Stats {
  constructor() {
    [this.stats] = document.getElementsByClassName('saved-articles__stats-container');
    [this.userName] = this.stats.getElementsByClassName('username');
    [this.articleCounterContiner] = this.stats.getElementsByClassName('saved-articles__article-counter');
    [this.frequentKeyWordsContainer] = this.stats.getElementsByClassName('saved-articles__themes-first');
    [this.keyWordCounter] = this.stats.getElementsByClassName('saved-articles__themes-counter');
    [this.keyWordCounterContainer] = this.stats.getElementsByClassName('saved-articles__more-themes');
  }

  setUserName(newName) {
    this.userName.innerHTML = capitalize(newName);
  }

  setCounter(number) {
    this.articleCounterContiner.innerHTML = parseArticleCounter(number);
  }

  setFrequentKeyWords(word1, word2) {
    console.log('setFrequentKeyWords');
    console.log(word1, word2);
    const str = `${capitalize(word1)}${word2 && `, ${capitalize(word2)}`}`;
    this.frequentKeyWordsContainer.innerHTML = str;
  }

  setKeyWordCounter(number) {
    if (number > 0) {
      this.keyWordCounterContainer.classList.remove('saved-articles__more-themes_hidden');
      this.keyWordCounter.innerHTML = parseKeyWordCouner(number);
    } else {
      this.keyWordCounterContainer.classList.add('saved-articles__more-themes_hidden');
    }
  }
}
