import Navbar from '../page-objects/components/Navbar';
import ForgottenPasswordPage from '../page-objects/pages/ForgottenPasswordPage';
import {click, expectSuccessMessage, type} from '../helper';
import {user} from '../data/UserData';
import {resetPasswordEmailSentMsg} from '../data/AlertMessages';

const navbar = new Navbar();
const forgottenPasswordPage = new ForgottenPasswordPage();

fixture `Password tests`
    .page `https://demo.spreecommerce.org/`;

test
    .before(async () => {
      await click(navbar.accountIcon);
      await click(navbar.loginLink);
    })('Validate forgotten password link to send email', async () => {
      await click(forgottenPasswordPage.forgotPasswordLink);
      await type(forgottenPasswordPage.username, user.email);
      await click(forgottenPasswordPage.resetPasswordButton());
      await expectSuccessMessage(resetPasswordEmailSentMsg);
    });
