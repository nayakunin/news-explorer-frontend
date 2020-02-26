import './saved-news.css';

const header = document.getElementsByClassName('header')[0];
const cards = document.getElementsByClassName('card');
cards.forEach((card) => {
  const button = card.getElementsByClassName('card__button')[0];
  const message = card.getElementsByClassName('card__button-popup')[0];

  button.addEventListener('click', (event) => {
    message.classList.remove('card__button-popup_hidden');
    setTimeout(() => {message.classList.add('card__button-popup_hidden')}, 5000);
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