import {login, expectSuccessMessage} from '../helper';
import {user} from '../data/UserData';
import {newAddressSaveSuccessMsg, deleteAddressSuccessMsg} from '../data/AlertMessages';
import MyAccountPage from '../page-objects/pages/MyAccountPage';

const accountPage = new MyAccountPage();

fixture `My Account tests`
    .page `https://demo.spreecommerce.org/`;

test
    .before(async () => {
      await login(user.email, user.password);
    })('User should be able to add new address', async (t) => {
      await accountPage.enterAddressDetails(user);
      await expectSuccessMessage(newAddressSaveSuccessMsg);
      await accountPage.expectAddressAtIndex(user);
    }).after(async () => {
      await accountPage.deleteAddress();
      await expectSuccessMessage(deleteAddressSuccessMsg);
    });
