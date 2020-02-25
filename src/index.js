import './index.css';
import './images/image-03.jpg';
import './images/not-found_v1.png';

const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let maxSymbols;

if (vw <= 500) {
  maxSymbols = 150;
} else if (vw <= 768) {
  maxSymbols = 80;
} else if (vw <= 1024) {
  maxSymbols = 90;
} else {
  maxSymbols = 150;
}

function truncate(element, maxLength) {
  let truncated = element.innerText;
  if (truncated.length > maxLength) {
    truncated = truncated.substr(0, maxLength) + '...';
  }
  return truncated;
}

const body = document.getElementsByClassName('body')[0];
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
  const description = card.getElementsByClassName('card__description')[0];
  description.innerText = truncate(description, maxSymbols);
})

const menuButtonOpen = document.getElementsByClassName('header__menu-button_open')[0];
const menuButtonClose = document.getElementsByClassName('header__menu-button_close')[0];
const headerDropdownBg = document.getElementsByClassName('header__dropdown-bg')[0];

headerDropdownBg.addEventListener('click', (event) => {
  body.classList.toggle('body_dropdown-active');
})

menuButtonOpen.addEventListener('click', (event) => {
  body.classList.add('body_dropdown-active');
})

menuButtonClose.addEventListener('click', (event) => {
  body.classList.remove('body_dropdown-active');
})


const popupCloseBtnArray = document.getElementsByClassName('popup__close-btn');
const popupBg = document.getElementsByClassName('popup__bg')[0];

popupBg.addEventListener('click', () => {
  body.classList.remove('body_popup-active');
})

popupCloseBtnArray.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    body.classList.remove('body_popup-active');
  })
})

const authButton = document.getElementsByClassName('header__button_noauth')[0];

authButton.addEventListener('click', () => {
  body.classList.add('body_popup-active');  
})