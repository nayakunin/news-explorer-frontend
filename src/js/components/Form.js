export default class Form {
  constructor(formObj) {
    this.form = formObj;
    this.inputs = this.form.getElementsByClass('popup__input');
    this.inputsError = this.form.getElementsByClass('popup__input-error');
    this.errorMsg = this.form.getElementsByClass('popup__button-message');
  }


  setServerError(error) {
    this.errorMsg.classList.add('popup__button-message_active');
    this.errorMsg.innerHtml = error;
  }

  _validateInputElement(i) {
    return this.input[i].checkValidity();
  }

  _validateForm() {
    let state = true;
    this.inputs.forEach((input) => {
      if (!this._validateInputElement(input)) {
        state = false;
      }
    });
    return state;
  }

  _clear() {
    this.inputs.forEach((input) => {
      input.value = '';
    });
    this.inputsError.forEach((inputError) => {
      this._hideErrorMsg(inputError);
    });
  }

  _showErrorMsg(i) {
    this.inputsError[i].classList.add('popup__input-error_active');
  }

  _hideErrorMsg(i) {
    this.inputsError[i].classList.remove('popup__input-error_active');
  }

  _getInfo() {
    const values = [];
    this.inputs.forEach((input) => {
      values.push(input.value);
    });
    return values;
  }
}
