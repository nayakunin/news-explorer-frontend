import resultsCardMarkup from '../utils/resultsCardMarkup';
import savedArticlesCardMarkup from '../utils/savedArticlesCardMarkup';

export default class NewsCard {
  constructor(options) {
    this.payload = options;
    this.id = undefined;


    this.assignButton = this.assignButton.bind(this);
    this.assignButtonPopup = this.assignButtonPopup.bind(this);
  }

  assignButton(button) {
    this.button = button;
  }

  assignButtonPopup(buttonPopup) {
    this.buttonPopup = buttonPopup;
  }
}
