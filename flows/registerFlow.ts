import { Pages } from '../context/pages';
import { UserModel } from '../models/userModel';

export async function registerUser(pages: Pages, user: UserModel) {
    const {
        homePage,
        loginPage,
        signupPage,
        accountCreatedPage
    } = pages;

    await homePage.acceptCookiesIfPresent();
    await homePage.navBar.goToLoginPage();

    await loginPage.verifyIsAtLoginPage();
    await loginPage.signup(user.name, user.email);

    await signupPage.verifyIsAtSignupPage(user.name, user.email);
    await signupPage.createAccount(user);

    await accountCreatedPage.verifyAccountCreated();
    await accountCreatedPage.clickContinue();

    await homePage.verifyIsAtHomePage();
    await homePage.navBar.verifyUserIsLoggedIn(user.name);
}
