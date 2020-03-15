import './saved-news.css';

import Header from '../../js/components/Header';
import MainApi from '../../js/api/MainApi';
import MainApiOptinos from '../../js/constants/MainApi.json';
import NewsCard from '../../js/components/SavedNewsCard';
import NewsCardList from '../../js/components/SavedNewsCardList';
import Stats from '../../js/components/Stats';

const mainApi = new MainApi(MainApiOptinos);

const header = new Header();
const newsCardList = new NewsCardList();
const stats = new Stats();

const { body } = document;

if (!localStorage.getItem('token')) {
  const url = window.location.href;
  window.location.href = url.slice(0, url.indexOf('saved-news'));
}

stats.setUserName(localStorage.getItem('userName'));


const updateStats = async () => {
  await mainApi.getArticles()
    .then((res) => {
      const keyWords = new Map();
      if (!res.data.length) {
        newsCardList.showEmpty();
      }
      res.data.forEach((curr) => {
        const key = curr.keyword;
        if (!keyWords.has(key)) {
          keyWords.set(key, 1);
        } else {
          keyWords.set(key, keyWords.get(key) + 1);
        }
      });
      const count = res.data.length;
      stats.setCounter(count);
      if (keyWords.size > 2) {
        let max1Count = 0;
        let max1KeyWord;
        let max2Count = 0;
        let max2KeyWord;
        [...keyWords.entries()].forEach(([k, v]) => {
          if (max1Count <= v) {
            if (max1KeyWord) {
              max2KeyWord = max1KeyWord;
              max2Count = max1Count;
            }
            max1KeyWord = k;
            max1Count = v;
          } else if (max2Count <= 0) {
            max2Count = v;
            max2KeyWord = k;
          }
        });
        stats.setFrequentKeyWords(max1KeyWord, max2KeyWord);
        stats.setKeyWordCounter(keyWords.size - 2);
      } else {
        stats.setFrequentKeyWords([...keyWords.keys()][0], [...keyWords.keys()][1]);
        stats.setKeyWordCounter(0);
      }
    }).catch((err) => err);
};

function handleButtonClick(event) {
  const [button] = this.getElementsByClassName('card__button');
  if (event.target === button
    || event.target.parentNode === button
    || event.target.parentNode.parentNode === button) {
    const [buttonPopup] = this.getElementsByClassName('card__button-popup');
    buttonPopup.classList.remove('card__button-popup_hidden');
  }
}
function handleDeletion(card, cardId) {
  return async (event) => {
    const [buttonPopup] = card.getElementsByClassName('card__button-popup');
    if (event.target === buttonPopup
      || event.target.parentNode === buttonPopup) {
      try {
        const result = await mainApi.removeArticle(cardId);
        if (result.data) {
          newsCardList.removeFromArrayByIndex(card.id);
          card.remove();
          updateStats();
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
}

const loadArticles = () => {
  mainApi.getArticles()
    .then((res) => {
      const cards = res.data;
      if (!cards.length) {
        newsCardList.showEmpty();
      } else {
        const newsCards = [];
        for (let i = 0; i < cards.length; i += 1) {
          newsCards.push(new NewsCard(cards[i], i));
        }
        newsCardList.addCards(newsCards);
        newsCardList.renderResult();
        for (let i = 0; i < cards.length; i += 1) {
          const card = document.getElementById(`saved-articles-card_${i}`);
          const [button] = card.getElementsByClassName('card__button');
          const [buttonPopup] = card.getElementsByClassName('card__button-popup');
          const cardObj = newsCardList.getFromArrayByIndex(i);
          cardObj.assignButton(button);
          cardObj.assignButtonPopup(buttonPopup);

          card.addEventListener('click', handleButtonClick);
          card.addEventListener('click', handleDeletion(card, cardObj.payload._id));
        }
      }
    }).catch((err) => err);
};

header.signOutBtn.addEventListener('click', () => {
  body.classList.remove('body_auth');
  body.classList.add('body_noauth');
  localStorage.removeItem('userName');
  localStorage.removeItem('token');
  const url = window.location.href;
  window.location.href = url.slice(0, url.indexOf('saved-news'));
});

updateStats();
loadArticles();
