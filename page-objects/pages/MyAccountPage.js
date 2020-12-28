import {Selector, t} from 'testcafe';
import {expectElementContainsText, selectFromList} from '../../helper';

class MyAccountPage {
  constructor() {
    this.accountUserInfo = Selector('.account-page-user-info-item-definition');
    this.addNewAddressLink = Selector('.account-page-new-address-link');
    this.firstname = Selector('#address_firstname');
    this.lastname = Selector('#address_lastname');
    this.addressLine1 = Selector('#address_address1');
    this.city = Selector('#address_city');
    this.stateDropdown = Selector('#address_state_id');
    this.postalCode = Selector('#address_zipcode');
    this.phone = Selector('#address_phone');
    this.saveButton = Selector('input').withAttribute('value', 'Save');
    this.savedAddressList = Selector('address');
    this.deleteIcon = Selector('.delete-address-img');
    this.deleteAddressPopUpConfirm = Selector('#delete-address-popup-confirm');
  }

  async enterAddressDetails(user) {
    await t
        .click(this.addNewAddressLink)
        .typeText(this.firstname, user.firstname)
        .typeText(this.lastname, user.lastname)
        .typeText(this.addressLine1(), user.addressLine1)
        .typeText(this.city(), user.city)
        .typeText(this.postalCode(), user.postalCode)
        .typeText(this.phone(), user.phone);
    await selectFromList(this.stateDropdown, user.state);
    await t.click(this.saveButton());
  }

  async expectAddressAtIndex(user) {
    const savedAddressByName = this.savedAddressList.withText(`${user.firstname} ${user.lastname}`);
    await expectElementContainsText(savedAddressByName, user.addressLine1);
    await expectElementContainsText(savedAddressByName, user.city);
    await expectElementContainsText(savedAddressByName, user.postalCode);
  }

  async deleteAddress() {
    await t
        .click(this.deleteIcon.nth(1))
        .click(this.deleteAddressPopUpConfirm);
  }
}

export default MyAccountPage;
