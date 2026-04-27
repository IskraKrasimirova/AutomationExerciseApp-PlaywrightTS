import { test } from '../tests/setup';
import { config } from '../utils/config';
import { registerUser } from '../flows/registerFlow';
import { deleteUserAccount } from '../flows/deleteAccountFlow';
import { UserFactory } from '../factories/userFactory';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { UserModel } from '../models/userModel';;

test.describe('Login tests @login', () => {

    let user: UserModel;

    test.beforeEach(async ({ page }) => {
        await page.goto(config.baseUrl);

        // Create and register a user
        user = UserFactory.createDefault();
        await registerUser(page, user);

        // Logout to prepare for login tests
        const homePage = new HomePage(page);
        await homePage.navBar.logout();

        const loginPage = new LoginPage(page);
        await loginPage.verifyIsAtLoginPage();
    });

    test.afterEach(async ({ page }) => {
        // Login again to delete the account
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        if (await homePage.navBar.isUserLoggedIn()) {
            await homePage.navBar.logout();
            await loginPage.verifyIsAtLoginPage();
        }

        await loginPage.login(user.email, user.password);
        await homePage.verifyIsAtHomePage();
        await deleteUserAccount(page);
    });

    test('User can login successfully @smoke', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        await loginPage.login(user.email, user.password);
        await homePage.verifyIsAtHomePage();
        await homePage.navBar.verifyUserIsLoggedIn(user.name);
    });

    test('User cannot login with wrong password @regression', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login(user.email, 'wrongpassword');
        await loginPage.verifyInvalidCredentialsError();
    });

    test('User cannot login with non-existing email @regression', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.login('nonexisting@email.com', 'somepassword');
        await loginPage.verifyInvalidCredentialsError();
    });
});