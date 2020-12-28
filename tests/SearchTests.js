import Navbar from '../page-objects/components/Navbar';
import {expectElementExists, expectElementContainsText} from '../helper';
import SearchResultsPage from '../page-objects/pages/SearchResultsPage';
import {searchText} from '../data/SearchData';

const navbar = new Navbar();
const searchResultsPage = new SearchResultsPage();

fixture `Search tests`
    .page `https://demo.spreecommerce.org/`;

test('Valid search criteria should return search results', async () => {
  await navbar.search(searchText);
  await expectElementExists(searchResultsPage.searchResultsList);

  const productNames = await searchResultsPage.getAllProductNames();

  for (let i=0; i< productNames.count; i++) {
    await expectElementContainsText((await searchResultsPage.getProductNameAtPosition(i)).toLowerCase(), searchText);
  }
});
