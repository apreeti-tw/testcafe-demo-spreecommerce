import {
  expectElementContainsText,
  expectSuccessMessage,
  logout,
  expectErrorMessage, expectElementNotExists, click,
} from '../helper';
import {user} from '../data/UserData';
import {loginSuccessMsg, invalidCredentialsMsg} from '../data/AlertMessages';
import Navbar from '../page-objects/components/Navbar';
import LoginPage from '../page-objects/pages/LoginPage';
import MyAccountPage from '../page-objects/pages/MyAccountPage';

const navbar = new Navbar();
const loginPage = new LoginPage();
const accountPage = new MyAccountPage();

fixture `Validate login`
    .page `https://demo.spreecommerce.org/`;

test('Valid user should be able to login', async () => {
  await click(navbar.accountIcon);
  await click(navbar.loginLink);
  await loginPage.loginToApp(user.email, user.password);
  await expectSuccessMessage(loginSuccessMsg);
  await expectElementContainsText(accountPage.accountUserInfo, user.email);
}).after(async () => {
  await logout();
},
);

test('Invalid user should not be able to login', async () => {
  await click(navbar.accountIcon);
  await click(navbar.loginLink);
  await loginPage.loginToApp(user.email, `${user.password}invalidated`);
  await expectErrorMessage(invalidCredentialsMsg);
  await expectElementNotExists(accountPage.accountUserInfo);
});
