import './results.css';
import '../../images/image-03.jpg';
import '../../images/not-found_v1.png';

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