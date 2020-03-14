export default class Header {
  constructor() {
    [this.header] = document.getElementsByClassName('header');
    [this.userName] = this.header.getElementsByClassName('header__username');
    [this.signInBtn] = this.header.getElementsByClassName('header__button-container_noauth');
    [this.signOutBtn] = this.header.getElementsByClassName('header__button-container_auth');

    if (localStorage.getItem('token')) this.render();

    // this.signInBtn.addEventListener('click', () => {
    //   Popup.switchContent('login');
    //   Popup.open();
    // });

    // this.signOutBtn.addEventListener('click', () => {
    //   this.isLoggedIn = false;
    //   document.body.classList.remove('body_auth');
    //   document.body.classList.add('body_noauth');
    //   localStorage.removeItem('user');
    //   localStorage.removeItem('token');
    // });
  }

  render() {
    if (localStorage.getItem('userName')) {
      this.userName.textContent = localStorage.getItem('userName');
      document.body.classList.add('body_auth');
      document.body.classList.remove('body_noauth');
    }
  }
}
