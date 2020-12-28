import {Selector, t} from 'testcafe';

class Navbar {
  constructor() {
    this.searchIcon = Selector('.search-icons');
    this.searchBox = Selector('#search-dropdown').find('input');
    this.accountIcon = Selector('#account-button');
    this.loginLink = Selector('#link-to-account').find('a').withExactText('LOG IN');
    this.logoutLink = Selector('#link-to-account').find('a').withExactText('LOG OUT');
  }

  async search(searchText) {
    await t
        .click(this.searchIcon())
        .typeText(this.searchBox(), searchText, {paste: true, replace: true})
        .pressKey('enter');
  }
}

export default Navbar;
