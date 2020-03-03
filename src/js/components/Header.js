import State from './State';

export default class Header {
  constructor(options) {
    this.header = document.getElementsByClassName('header')[0];
    this.userName = this.header.getElementsByClassName('header__username')[0];
    this.signInBtn = this.header.getElementsByClassName('header__button-container_noauth')[0];
    this.signUpBtn = this.header.getElementsByClassName('header__button-container_auth')[0];


    if (options.white) {
      this.header.classList.add('header_white');
    }
  }

  render = (props) => {
    if (props.isLoggedIn) {
      State.setNotAuthorized();
    } else {
      this.userName.innerHTML = props.userName;
      State.setAuthorized();
    }
  }
}