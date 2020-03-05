import parseDate from '../utils/parseDate';
import State from './State';

export default class NewsCard {
  constructor(options) {
    this.iconState = 'default';
    this.markup = `
    <div class="card">
      <div class="card__image" style="background-image: url(${options.url})">
        <div class="card__button-container results__card-button-container">
          <div class="card__button-popup results__card-button-popup card__button-popup_hidden"><span class="card__button-popup-text">Войдите,
              чтобы сохранять статьи</span></div>
          <div class="card__button results__card-button">
            <svg class="card__button-inside" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="card__button-outline" d="M11.3822 15.7137L6 19.9425V4L18 4V19.9425L12.6178 15.7137L12 15.2283L11.3822 15.7137Z"
                stroke="#B6BCBF" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
      <div class="card__info">
        <p class="card__date">${parseDate(options.date)}</p>
        <div class="card__text-container">
          <h3 class="card__title">${options.title}</h3>
          <p class="card__description">${options.description}</p>
        </div>
      </div>
      <p class="card__author">${options.author}</p>
    </div>`
  }

  render() {

  }

  renderIcon() {
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
    // if (State.isLoggedIn && this.iconState === 'default') {
    //   // пометить как сохраненную
    //   this.button.classList.add('card__button_blue');
    // } else if (State.isLoggedIn && this.iconState === 'saved') {
    //   this.button.classList.add('card__button_default');
    // } else
  }
}