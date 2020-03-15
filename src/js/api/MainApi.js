export default class MainApi {
  constructor(props) {
    this.baseUrl = props.baseUrl;


    this.signup = this.signup.bind(this);
    this.signin = this.signin.bind(this);
    this.createArticle = this.createArticle.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.removeArticle = this.removeArticle.bind(this);
  }

  signup(user) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        name: user.name,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.status);
        }
        return res.json();
      });
  }

  signin(user) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.status);
        }
        return res.json();
      });
  }

  getUserData() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      });
  }

  getArticles() {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      });
  }

  createArticle(card) {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        keyword: card.keyword,
        title: card.title,
        text: card.description,
        date: card.date,
        source: card.author,
        link: card.url,
        image: card.urlToImage,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      });
  }

  removeArticle(id) {
    return fetch(`${this.baseUrl}/articles/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      });
  }
}
