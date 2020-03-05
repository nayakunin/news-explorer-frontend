class Popup {
  constructor() {
    this.popup = document.getElementsByClassName('popup')[0];
    this.closeBtn = this.popup.getElementsByClassName('popup__close-btn')[0];
    this.popupBg = this.popup.getElementsByClassName('popup__bg')[0];


    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.switchContent = this.switchContent.bind(this);

    this.closeBtn.addEventListener('click', this.close);
    this.popupBg.addEventListener('click', this.close);
  }

  switchContent(type) {
    const classList = this.popup.classList;
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

  open () {
    this.popup.classList.remove('popup_hidden');
  }

  close() {
    this.popup.classList.add('popup_hidden');
  }
}

export default new Popup();