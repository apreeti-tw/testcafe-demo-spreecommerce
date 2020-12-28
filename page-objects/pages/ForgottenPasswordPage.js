import {Selector} from 'testcafe';

class ForgottenPasswordPage {
  constructor() {
    this.forgotPasswordLink = Selector('div.forgot-password').child('a');
    this.username = Selector('#spree_user_email');
    this.resetPasswordButton = Selector('input').withAttribute('value', 'Reset my password');
  }
}

export default ForgottenPasswordPage;
