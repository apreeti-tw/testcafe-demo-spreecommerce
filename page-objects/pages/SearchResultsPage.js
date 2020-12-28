import {Selector} from 'testcafe';

class SearchResultsPage {
  constructor() {
    this.searchResultsList = Selector('div').withAttribute('data-hook', 'homepage_products');
    this.productNames = Selector('div.product-component-name');
  }

  async getAllProductNames() {
    return this.productNames;
  }

  async getProductNameAtPosition(index) {
    return this.productNames.nth(index).getAttribute('title');
  }
}

export default SearchResultsPage;
