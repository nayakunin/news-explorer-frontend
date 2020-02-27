import './index.css';
import '../../images/image-03.jpg';
import '../../images/not-found_v1.png';

const body = document.getElementsByClassName('body')[0];

const header = document.getElementsByClassName('header')[0];
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