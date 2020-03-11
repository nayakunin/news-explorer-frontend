import parseDate from './parseDate';
import capitalize from './capitalize';

export default (options, instanceCounter) => `
  <div id="saved-articles-card_${instanceCounter}" class="saved-articles__card card">
    <div class="card__image" style="background-image: url(${options.image})">
      <div class="card__theme-container"><span class="card__theme">${capitalize(options.keyword)}</span></div>
      <div class="card__button-container saved-articles__card-button-container">
        <div class="card__button-popup card__button-popup_hidden"><span class="card__button-popup-text">Убрать из
            сохраненных?</span></div>
        <div class="card__button saved-articles__card-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="card__delete-icon" fill-rule="evenodd" clip-rule="evenodd"
              d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z"
              fill="#B6BCBF" />
          </svg>
        </div>
      </div>
    </div>
    <div class="card__info">
      <p class="card__date">${parseDate(options.date)}</p>
      <div class="card__text-container">
        <h3 class="card__title">${options.title}</h3>
        <p class="card__description">${options.text}</p>
      </div>
    </div>
    <p class="card__author">${options.source}</p>
  </div>`;
