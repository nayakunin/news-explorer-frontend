import State from './State';
import Popup from './Popup';

export default class Header {
  constructor() {
    [this.header] = document.getElementsByClassName('header');
    [this.userName] = this.header.getElementsByClassName('header__username');
    [this.signInBtn] = this.header.getElementsByClassName('header__button-container_noauth');
    [this.signOutBtn] = this.header.getElementsByClassName('header__button-container_auth');

    this.signInBtn.addEventListener('click', () => {
      Popup.switchContent('login');
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
