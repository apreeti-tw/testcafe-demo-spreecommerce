import {Selector, t} from 'testcafe';

class LoginPage {
  constructor() {
    this.username = Selector('#spree_user_email');
    this.password = Selector('#spree_user_password');
    this.loginButton = Selector('.btn-primary');
  }

  async loginToApp(username, password) {
    await t
        .typeText(this.username, username, {paste: true})
        .typeText(this.password, password, {paste: true})
        .click(this.loginButton);
  }
}

export default LoginPage;
