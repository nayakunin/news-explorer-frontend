class State {
  constructor(options) {
    this.state = document.getElementsByClassName('body');
    this.isLoggedIn = false;
    this.userName = null;
  }

  signIn = () => {
    this.isLoggedIn = true;
    this.state.classList.add('body_auth');
    this.state.classList.remove('body_noauth');
  }

  logOut = () => {
    this.isLoggedIn = false;
    this.state.classList.add('body_noauth');
    this.state.classList.remove('body_auth');
  }

}

export default new State();