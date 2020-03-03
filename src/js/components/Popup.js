export default class Popup {
  constructor() {
    this.DOMobj = document.getElementsByClassName('popup');
  }

  switchContent = (type) => {
    const classList = this.DOMobj.classList;
    classList.remove('popup_login');
    classList.remove('popup_register');
    classList.remove('popup_info');
    switch(type) {
      case 'login':
        classList.add('popup_login');
        break;
      case 'register':
        classList.add('popup_register');
        break;
      case 'info':
        classList.add('popup_info');
        break;
    }
  }

  open = () => {
    this.DOMobj.classList.remove('popup_hidden');
  }

  close = () => {
    this.DOMobj.classList.add('popup_hidden');
  }
}