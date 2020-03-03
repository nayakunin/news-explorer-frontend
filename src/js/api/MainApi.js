export default class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    // this.signup = this.signup.bind(this);
  }

  signup(user) {
    console.log(user);
    fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        username: user.name
      })
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

  // signin = () => {

  // }

  // getUserDate = () => {

  // }

  // getArticles = () => {

  // }

  // createArticle = () => {

  // }

  // removeArticle = () => {

  // }
}