import { test } from '../tests/setup';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { SignupPage } from '../pages/signupPage';
import { AccountCreatedPage } from '../pages/accountCreatedPage';
import { AccountDeletedPage } from '../pages/accountDeletedPage';
import { UserFactory } from '../factories/userFactory';
import { config } from '../utils/config';
import { UserModel } from '../models/userModel';
import { Page } from '@playwright/test';

async function registerUser(page: Page, user: UserModel) {
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

async function deleteUserAccount(page: Page) {
    const homePage = new HomePage(page);
    const accountDeletedPage = new AccountDeletedPage(page);

    await homePage.navBar.deleteAccount();
    await accountDeletedPage.verifyAccountDeleted();
    await accountDeletedPage.clickContinue();
    await homePage.verifyIsAtHomePage();
}

test.describe('Register tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(config.baseUrl);
    });

    test('User can register successfully', async ({ page }) => {
        const newUser = UserFactory.createDefault();
        await registerUser(page, newUser);
        await deleteUserAccount(page);
    });
});


