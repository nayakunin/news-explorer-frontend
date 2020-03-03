import parseDate from '../utils/parseDate';
import State from './State';

export default class NewsCard {
  constructor(options) {
    this.iconState = 'default';
    this.template = document.getElementsByClassName('card-template')[0];
    this.button = this.template.getElementsByClassName('card__button')[0];
    this.author = this.template.getElementsByClassName('card__author')[0];
    this.title = this.template.getElementsByClassName('card__title')[0];
    this.date = this.template.getElementsByClassName('card__date')[0];
    this.description = this.template.getElementsByClassName('card__description')[0];
    this.image = this.template.getElementsByClassName('card__image')[0];

    this.author.innerHTML = options.author;
    this.title.innerHTML = options.title;
    this.date = parseDate(options.date);
    this.description = options.description;
    this.image.style.backgroundImage = `url(${options.url})`;
  }

  renderIcon = () => {
    this.button.classList.remove('card__button_default');
    this.button.classList.remove('card__button_black');
    this.button.classList.remove('card__button_blue');
    if (State.isLoggedIn) {
      if (this.iconState === 'default') {
        // Пометить как сохраненную
        this.button.classList.add('card__button_blue');
      } else if (this.iconState === 'saved') {
        // Отменить сохранение
        this.button.classList.add('card__button_default');
      }
    }
    if (State.isLoggedIn && this.iconState === 'default') {
      // пометить как сохраненную
      this.button.classList.add('card__button_blue');
    } else if (State.isLoggedIn && this.iconState === 'saved') {
      this.button.classList.add('card__button_default');
    } else
  }
}