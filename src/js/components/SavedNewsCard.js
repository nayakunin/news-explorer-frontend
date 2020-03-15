import NewsCard from './NewsCard';
import savedArticlesCardMarkup from '../utils/savedArticlesCardMarkup';

export default class SavedNewsCard extends NewsCard {
  constructor(options, instanceCounter) {
    super(options);
    this.markup = savedArticlesCardMarkup(options, instanceCounter);
    this.id = `saved-articles-card_${instanceCounter}`;
    this.showButtonPopup = this.showButtonPopup.bind(this);
    this.hideButtonPopup = this.hideButtonPopup.bind(this);
  }

  showButtonPopup() {
    this.buttonPopup.classlist.remove('card__button-popup_hidden');
  }

  hideButtonPopup() {
    this.buttonPopup.classlist.add('card__button-popup_hidden');
  }
}
