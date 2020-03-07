export default class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;


    this.signup = this.signup.bind(this);
  }

  signup(user) {
    fetch(`${this.baseUrl}/signup`, {
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
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  signin(user) {
    fetch(`${this.baseUrl}/signin`, {
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
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
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
