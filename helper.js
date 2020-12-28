import {Selector, t} from 'testcafe';
import LoginPage from './page-objects/pages/LoginPage';
import Navbar from './page-objects/components/Navbar';

const loginPage = new LoginPage();
const navbar = new Navbar();

export async function login(username, password) {
  await t
      .click(navbar.accountIcon)
      .click(navbar.loginLink())
      .typeText(loginPage.username, username, {paste: true})
      .typeText(loginPage.password(), password, {paste: true})
      .click(loginPage.loginButton);
  await expectSuccessMessage('Logged in successfully');
}

export async function logout() {
  await t
      .click(navbar.accountIcon)
      .click(navbar.logoutLink());
}

export async function expectElementContainsText(element, text) {
  await t.expect(element.innerText).contains(text);
}

export async function expectElementExists(element) {
  await t.expect(element.exists).ok();
}

export async function expectElementNotExists(element) {
  await t.expect(element.exists).notOk();
}

export async function expectSuccessMessage(message) {
  await t.expect(Selector('.alert-success').child('span').innerText).eql(message);
}

export async function expectErrorMessage(message) {
  await t.expect(Selector('.alert-danger').child('span').innerText).eql(message);
}

export async function selectFromList(list, optionText) {
  await list.find('option').withText(optionText);
}

export async function click(element) {
  await t.click(element);
}

export async function type(element, text) {
  await t.typeText(element, text);
}
