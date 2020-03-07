class Popup {
  constructor() {
    [this.popup] = document.getElementsByClassName('popup');
    [this.closeBtn] = this.popup.getElementsByClassName('popup__close-btn');
    [this.popupBg] = this.popup.getElementsByClassName('popup__bg');


    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.switchContent = this.switchContent.bind(this);

    this.closeBtn.addEventListener('click', this.close);
    this.popupBg.addEventListener('click', this.close);
  }

  switchContent(type) {
    const { classList } = this.popup;
    classList.remove('popup_login');
    classList.remove('popup_register');
    classList.remove('popup_info');
    switch (type) {
      case 'login':
        classList.add('popup_login');
        break;
      case 'register':
        classList.add('popup_register');
        break;
      case 'info':
        classList.add('popup_info');
        break;
      default:
        break;
    }
  }

  open() {
    this.popup.classList.remove('popup_hidden');
  }

  close() {
    this.popup.classList.add('popup_hidden');
  }
}

export default new Popup();
