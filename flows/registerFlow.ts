import { Page } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { SignupPage } from '../pages/signupPage';
import { AccountCreatedPage } from '../pages/accountCreatedPage';
import { UserModel } from '../models/userModel';

export async function registerUser(page: Page, user: UserModel) {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    const accountCreatedPage = new AccountCreatedPage(page);

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
