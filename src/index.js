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

const cards = document.getElementsByClassName('card');
cards.forEach((card) => {
  const description = card.getElementsByClassName('card__description')[0];
  description.innerText = truncate(description, maxSymbols);
})