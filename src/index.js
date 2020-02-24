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

const menuButton = document.getElementsByClassName('header__menu-button-container')[0];
const headerDropdownBg = document.getElementsByClassName('header__dropdown-bg')[0];

headerDropdownBg.addEventListener('click', (event) => {
  header.classList.toggle('header_dropdown-active');
})

menuButton.addEventListener('click', (event) => {
  body.classList.toggle('body_dropdown-active');
})

