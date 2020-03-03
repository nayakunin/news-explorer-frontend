import './index.css';
import '../../images/image-03.jpg';
import '../../images/not-found_v1.png';
import '../../images/favicon.png';

// import NewsApiClass from '../../js/api/NewsApi';
// import NewsApiOptions from '../../js/constants/NewsApi.json';
// const NewsApi = new NewsApiClass(NewsApiOptions);
// NewsApi.getNews('Аниме');
// NewsApi.getNews('Аниме');
// NewsApi.getNews('Аниме');
// NewsApi.getNews('Аниме');

import MainApiClass from '../../js/api/MainApi';
import MainApiOptions from '../../js/constants/MainApi.json';

const MainApi = new MainApiClass(MainApiOptions);

const body = document.getElementsByClassName('body')[0];
const header = document.getElementsByClassName('header')[0];
const cards = document.getElementsByClassName('card');
cards.forEach((card) => {
  const button = card.getElementsByClassName('card__button')[0];
  const noAuthMessage = card.getElementsByClassName('card__button-popup')[0];

  button.addEventListener('click', (event) => {
    if (body.classList.contains('body_noauth')) {
      noAuthMessage.classList.remove('card__button-popup_hidden');
    } else {
      const inside = button.getElementsByClassName('card__button-inside')[0];
      const outline = button.getElementsByClassName('card__button-outline')[0];

      inside.classList.toggle('card__button-inside_active');
      outline.classList.toggle('card__button-outline_active');
    }
  });
})
const menuButtonOpen = document.getElementsByClassName('header__menu-button_open')[0];
const menuButtonClose = document.getElementsByClassName('header__menu-button_close')[0];
const headerDropdownBg = document.getElementsByClassName('header__dropdown-bg')[0];

headerDropdownBg.addEventListener('click', (event) => {
  header.classList.remove('header_dropdown-active');
})

menuButtonOpen.addEventListener('click', (event) => {
  header.classList.add('header_dropdown-active');
})

menuButtonClose.addEventListener('click', (event) => {
  header.classList.remove('header_dropdown-active');
})


const popupCloseBtn = document.getElementsByClassName('popup__close-btn')[0];
const popupBg = document.getElementsByClassName('popup__bg')[0];

popupBg.addEventListener('click', () => {
  body.classList.remove('body_popup-active');
})

popupCloseBtn.addEventListener('click', (event) => {
  body.classList.remove('body_popup-active');
})

const authButton = document.getElementsByClassName('header__button_noauth')[0];

authButton.addEventListener('click', () => {
  body.classList.add('body_popup-active');
})

const forms = document.getElementsByClassName('popup__form');
forms.forEach((form) => {
  const inputs = form.getElementsByClassName('popup__input');
  const button = form.getElementsByClassName('popup__button')[0];
  inputs.forEach((input) => {
    const errorMessage = input.parentNode.getElementsByClassName('popup__input-error')[0];
    input.addEventListener('input', (event) => {
      if (!event.target.checkValidity()) {
        errorMessage.classList.add('popup__input-error_active');
      } else {
        errorMessage.classList.remove('popup__input-error_active');
      }
    })
  })
  form.addEventListener('input', (event) => {
    let valid = true;
    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        valid = false;
      }
    })
    if (valid) {
      button.classList.remove('popup__button_disabled');
    } else {
      button.classList.add('popup__button_disabled');
    }
  })
})