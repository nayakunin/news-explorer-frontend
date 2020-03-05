import State from './State';
import Popup from './Popup';

export default class Header {
  constructor(options) {
    this.header = document.getElementsByClassName('header')[0];
    this.userName = this.header.getElementsByClassName('header__username')[0];
    this.signInBtn = this.header.getElementsByClassName('header__button-container_noauth')[0];
    this.signOutBtn = this.header.getElementsByClassName('header__button-container_auth')[0];

    this.signInBtn.addEventListener('click', () => {
      Popup.switchContent('login')
      Popup.open();
    });
  }

  render(props) {
    if (props.isLoggedIn) {
      State.setNotAuthorized();
    } else {
      this.userName.innerHTML = props.userName;
      State.setAuthorized();
    }
  }
}