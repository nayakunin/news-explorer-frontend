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
    [this.keyWordsPargaph] = this.stats.getElementsByClassName('saved-articles__subtitle');
  }

  setUserName(newName) {
    this.userName.innerHTML = capitalize(newName);
  }

  setCounter(number) {
    this.articleCounterContiner.innerHTML = parseArticleCounter(number);
  }

  setFrequentKeyWords(word1, word2) {
    if (!word1) {
      this.keyWordsPargaph.classList.add('saved-articles__subtitle_none');
    } else {
      this.keyWordsPargaph.classList.remove('saved-articles__subtitle_none');
      const str = `${capitalize(word1)}${word2 !== undefined ? `, ${capitalize(word2)}` : ''}`;
      this.frequentKeyWordsContainer.innerHTML = str;
    }
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
