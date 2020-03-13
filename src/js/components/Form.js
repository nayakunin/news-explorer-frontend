export default class Form {
  constructor(formObj) {
    this.form = formObj;
    this.inputs = this.form.getElementsByClassName('popup__input');
    this.inputsError = this.form.getElementsByClassName('popup__input-error');
    [this.errorMsg] = this.form.getElementsByClassName('popup__button-message');
    [this.submitBtn] = this.form.getElementsByClassName('popup__button');

    this._valid = false;

    this.clear = this.clear.bind(this);
    // this._getInfo = this._getInfo.bind(this);
    this._hideErrorMsg = this._hideErrorMsg.bind(this);
    this._showErrorMsg = this._showErrorMsg.bind(this);
    this._validateForm = this._validateForm.bind(this);
    this._validateInputElement = this._validateInputElement.bind(this);
    this.setServerError = this.setServerError.bind(this);
    this.typeHandler = this.typeHandler.bind(this);
    // this.submitHandler = this.submitHandler.bind(this);

    // this.submitBtn.addEventListener('click', this.submitHandler);
    this.form.addEventListener('input', this.typeHandler);

    for (let i = 0; i < this.inputs.length; i += 1) {
      this.inputs[i].addEventListener('input', () => {
        if (this._validateInputElement(i)) {
          this._hideErrorMsg(i);
        } else {
          this._showErrorMsg(i);
        }
      });
    }
  }

  _validateForm() {
    for (let i = 0; i < this.inputs.length; i += 1) {
      if (!this._validateInputElement(i)) return false;
    }
    return true;
  }

  _validateInputElement(i) {
    return this.inputs[i].checkValidity();
  }

  clear() {
    this.inputs.forEach((input) => {
      input.value = '';
    });
    let i = 0;
    this.inputsError.forEach(() => {
      this._hideErrorMsg(i);
      i += 1;
    });
    this.errorMsg.classList.remove('popup__button-message_active');
    this.errorMsg.innerHTML = '';
  }

  _showErrorMsg(i) {
    this.inputsError[i].classList.add('popup__input-error_active');
  }

  _hideErrorMsg(i) {
    this.inputsError[i].classList.remove('popup__input-error_active');
  }

  get getInfo() {
    const values = [];
    this.inputs.forEach((input) => {
      values.push(input.value);
    });
    return values;
  }

  setServerError(error) {
    this.errorMsg.classList.add('popup__button-message_active');
    this.errorMsg.innerHTML = error;
  }

  typeHandler() {
    if (this._validateForm()) {
      this._valid = true;
      this.submitBtn.classList.remove('popup__button_disabled');
    } else {
      this._valid = false;
      this.submitBtn.classList.add('popup__button_disabled');
    }
  }

  get valid() {
    return this._valid;
  }

  // submitHandler(event) {
  //   event.preventDefault();
  //   if (this._validateForm()) {
  //     const [email, password, name] = this._getInfo();
  //     this.callback({ email, password, name })
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         this.setServerError(error);
  //       });
  //   }
  // }
}
