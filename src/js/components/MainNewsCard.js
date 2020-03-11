import NewsCard from './NewsCard';
import resultsCardMarkup from '../utils/resultsCardMarkup';

export default class MainNewsCard extends NewsCard {
  constructor(options, instanceCounter) {
    super(options);
    this.markup = resultsCardMarkup(options, instanceCounter);
    this._iconState = 'deafult';

    this.renderIcon = this.renderIcon.bind(this);
  }

  get iconState() {
    return this._iconState;
  }

  renderIcon(newState) {
    this.button.classList.remove('card__button_default');
    this.button.classList.remove('card__button_black');
    this.button.classList.remove('card__button_blue');

    switch (newState) {
      case 'default':
        this._iconState = 'default';
        this.button.classList.add('card__button_default');
        break;
      case 'black':
        this._iconState = 'black';
        this.buttonPopup.classList.remove('card__button-popup_hidden');
        this.button.classList.add('card__button_black');
        break;
      case 'blue':
        this._iconState = 'blue';
        this.button.classList.add('card__button_blue');
        break;
      default:
    }
  }
}
