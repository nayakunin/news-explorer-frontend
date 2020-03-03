export default class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    // this.signup = this.signup.bind(this);
  }

  signup(user) {
    fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        username: user.name
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  signin(user) {
    fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  // getUserDate = () => {

  // }

  // getArticles = () => {

  // }

  // createArticle = () => {

  // }

  // removeArticle = () => {

  // }
}