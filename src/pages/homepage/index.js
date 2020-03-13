import './index.css';
import '../../images/image-03.jpg';
import '../../images/not-found_v1.png';
import '../../images/favicon.png';

import Search from '../../js/components/Search';
import Popup from '../../js/components/Popup';
import Header from '../../js/components/Header';
import Form from '../../js/components/Form';
import NewsCardList from '../../js/components/MainPageNewsCardList';
import NewsCard from '../../js/components/MainNewsCard';
import NewsApi from '../../js/api/NewsApi';
import NewsApiOptions from '../../js/constants/NewsApi.json';
import MainApi from '../../js/api/MainApi';
import MainApiOptinos from '../../js/constants/MainApi.json';

const [formLoginDOM, formSignUpDOM] = document.getElementsByClassName('popup__form');

const newsApi = new NewsApi(NewsApiOptions);
const mainApi = new MainApi(MainApiOptinos);

const formLogin = new Form(formLoginDOM);
const formSignUp = new Form(formSignUpDOM);
const search = new Search();
const popup = new Popup();
const header = new Header();
const newsCardList = new NewsCardList();

const { body } = document;

header.signInBtn.addEventListener('click', () => {
  popup.switchContent('login');
  popup.open();
});

header.signOutBtn.addEventListener('click', () => {
  body.classList.remove('body_auth');
  body.classList.add('body_noauth');
  localStorage.removeItem('userName');
  localStorage.removeItem('token');
});

popup.linkToSignUp.addEventListener('click', () => {
  formLogin.clear();
  popup.switchContent('signup');
});

popup.linkToLogin.addEventListener('click', () => {
  formSignUp.clear();
  popup.switchContent('login');
});

popup.linkToProceedLogin.addEventListener('click', () => {
  popup.switchContent('login');
});

popup.closeBtn.addEventListener('click', () => {
  popup.close();
  formLogin.clear();
  formSignUp.clear();
  formLogin.submitBtn.classList.add('popup__button_disabled');
  formSignUp.submitBtn.classList.add('popup__button_disabled');
});

popup.popupBg.addEventListener('click', () => {
  popup.close();
  formLogin.clear();
  formSignUp.clear();
  this.submitBtn.classList.add('popup__button_disabled');
});

search.btn.addEventListener('click', async (event) => {
  event.preventDefault();
  if (search.inputValid()) {
    try {
      const cards = await newsApi.getNews(search.input);
      const newsCards = [];
      for (let i = 0; i < cards.length; i += 1) {
        newsCards.push(new NewsCard(cards[i], i));
      }
      newsCardList.initialRender();
      newsCardList.addCards(newsCards);
      newsCardList.renderResult();
      for (let i = 0; i < cards.length; i += 1) {
        const card = document.getElementById(`results-card_${i}`);
        const [button] = card.getElementsByClassName('card__button');
        const cardObj = newsCardList.getFromArrayByIndex(i);
        cardObj.assignButton(button);
        cardObj.assignButtonPopup(card.getElementsByClassName('card__button-popup')[0]);
        card.addEventListener('click', async (event1) => {
          if (event1.target === button
            || event1.target.parentNode === button
            || event1.target.parentNode.parentNode === button) {
            const newCard = newsCardList.getFromArrayByIndex(i);
            if (localStorage.getItem('token')) {
              if (newCard.iconState === 'default') {
                try {
                  const result = await mainApi.createArticle(newCard.payload);
                  if (result.data) {
                    newCard.id = result.data._id;
                    newCard.renderIcon('blue');
                  }
                } catch (err) {
                  newCard.renderIcon('black');
                }
              } else if (newCard.iconState === 'blue') {
                if (newCard.id) {
                  try {
                    const result = await mainApi.removeArticle(newCard.id);
                    if (result.data) {
                      newCard.renderIcon('default');
                    }
                  } catch (err) {
                    newCard.renderIcon('black');
                  }
                }
              }
            } else {
              newCard.renderIcon('black');
            }
          }
        });
      }
    } catch (err) {
      newsCardList.renderError();
    }
  }
});

newsCardList.showMoreBtn.addEventListener('click', async () => {
  try {
    const cards = await newsApi.showMore();
    const alreadyRendered = newsCardList.length;
    const newCards = [];
    for (let i = alreadyRendered, j = 0; i < alreadyRendered + cards.length; i += 1, j += 1) {
      newCards.push(new NewsCard(cards[j], i));
    }
    newsCardList.addCards(newCards);
    newsCardList.renderResult();
    for (let i = alreadyRendered; i < alreadyRendered + cards.length; i += 1) {
      const card = document.getElementById(`results-card_${i}`);
      const [button] = card.getElementsByClassName('card__button');
      const cardObj = newsCardList.getFromArrayByIndex(i);
      cardObj.assignButton(button);
      cardObj.assignButtonPopup(card.getElementsByClassName('card__button-popup')[0]);
      button.addEventListener('click', async () => {
        const newCard = newsCardList.getFromArrayByIndex(i);
        if (localStorage.getItem('token')) {
          if (newCard.iconState === 'default') {
            try {
              const result = await mainApi.createArticle(newCard.payload);
              if (result.data) {
                newCard.id = result.data._id;
                newCard.renderIcon('blue');
              }
            } catch (err) {
              newCard.renderIcon('black');
            }
          } else if (newCard.iconState === 'blue') {
            if (newCard.id) {
              try {
                const result = await mainApi.removeArticle(newCard.id);
                if (result.data) {
                  newCard.renderIcon('default');
                }
              } catch (err) {
                newCard.renderIcon('black');
              }
            }
          }
        } else {
          newCard.renderIcon('black');
        }
      });
    }
  } catch (err) {
    newsCardList.renderError();
  }
});

formLogin.submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (formLogin.valid) {
    const [email, password] = formLogin.getInfo;
    mainApi.signin({ email, password })
      .then((res) => {
        localStorage.setItem('userName', res.user.name);
        localStorage.setItem('token', res.token);
        header.render();
        popup.close();
        formLogin.clear();
      })
      .catch((err) => {
        switch (err) {
          case 400:
            formLogin.setServerError('Ошибка. Проверьте правильность полей ввода');
            break;
          case 401:
            formLogin.setServerError('Неверный логин или пароль');
            break;
          default:
            formLogin.setServerError('Неизвестная ошибка');
        }
      });
  }
});

formSignUp.submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (formSignUp.valid) {
    const [email, password, name] = formSignUp.getInfo;
    mainApi.signup({ email, password, name })
      .then(() => {
        formSignUp.clear();
        popup.switchContent('info');
      })
      .catch((err) => {
        if (err === 400) {
          formSignUp.setServerError('Ошибка. Проверьте правильность полей ввода');
        } else {
          formSignUp.setServerError('Неизвестная ошибка');
        }
      });
  }
});
