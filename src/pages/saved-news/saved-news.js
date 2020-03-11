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
      const cards = res.data;
      if (!cards) {
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
        stats.setFrequentKeyWords([...keyWords.entries()].map(([k]) => k));
      }
    }).catch((err) => err);
};


const loadArticles = async () => {
  await mainApi.getArticles()
    .then((res) => {
      const cards = res.data;
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

        button.addEventListener('click', () => {
          const newsCard = newsCardList.getFromArrayByIndex(i);
          console.log(newsCard);
          newsCard.buttonPopup.classList.remove('card__button-popup_hidden');
        });
        buttonPopup.addEventListener('click', async () => {
          const newsCard = newsCardList.getFromArrayByIndex(i);
          const result = await mainApi.removeArticle(newsCard.payload._id);
          if (result.data) {
            newsCardList.removeById(newsCard.id);
            // newsCardList.renderResult();
            updateStats();
          }
        });
      }
    }).catch((err) => err);
};

header.signOutBtn.addEventListener('click', () => {
  body.classList.remove('body_auth');
  body.classList.add('body_noauth');
  localStorage.removeItem('userName');
  localStorage.removeItem('token');
});

updateStats();
loadArticles();
