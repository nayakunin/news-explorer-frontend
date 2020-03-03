export default class Form {
  constructor(formObj) {
    this.form = formObj;
    this.inputs = this.form.getElementsByClass('popup__input');
    this.inputsError = this.form.getElementsByClass('popup__input-error');
    this.errorMsg = this.form.getElementsByClass('popup__button-message');
  }


  setServerError = (error) => {
    this.errorMsg.classList.add('popup__button-message_active');
    this.errorMsg.innerHtml = error;
  }

  _validateInputElement = (inputObj) => {
    return inputObj.checkValidity();
  }

  _validateForm = () => {
    this.inputs.forEach((input) => {
      if (!this._validateInputElement(input)) {
        return false;
      }
    })
    return true;
  }

  _clear = () => {
    this.inputs.forEach((input) => {
      input.value = '';
    })
    this.inputsError.forEach((inputError) => {
      this._hideErrorMsg(inputError);
    })
  }

  _showErrorMsg = (inputError) => {
    inputError.classList.add('popup__input-error_active');
  }

  _hideErrorMsg = (inputError) => {
    inputError.classList.remove('popup__input-error_active');
  }

  _getInfo = () => {
    const values = [];
    this.inputs.forEach((input) => {
      values.push(input.value);
    });
    return values;
  }
}