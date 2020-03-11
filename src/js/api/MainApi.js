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
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
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
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        console.log('first then block');
        throw Error(response.json());
      })
      .catch((err) => {
        console.log('catch block');
        // console.log(err);
        return err;
      });
    // .then((data) => {
    //   console.log(data);
    //   return data;
    // })
    // .catch((err) => {
    //   console.log(err);
    //   return err;
    // });
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
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
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
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
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
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
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
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => err);
  }
}
