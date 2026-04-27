import { test } from '../tests/setup';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { UserFactory } from '../factories/userFactory';
import { config } from '../utils/config';
import { registerUser } from '../flows/registerFlow';
import { deleteUserAccount } from '../flows/deleteAccountFlow';


test.describe('Register tests @register', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(config.baseUrl);
    });

    test('User can register successfully @smoke', async ({ page }) => {
        const newUser = UserFactory.createDefault();
        await registerUser(page, newUser);
        await deleteUserAccount(page);
    });

    test('Newly registered user can login successfully @e2e', async ({ page }) => {
        const user = UserFactory.createDefault();
        await registerUser(page, user);

        const homePage = new HomePage(page);
        await homePage.navBar.logout();

        const loginPage = new LoginPage(page);
        await loginPage.verifyIsAtLoginPage();
        await loginPage.login(user.email, user.password);

        await homePage.verifyIsAtHomePage();
        await homePage.navBar.verifyUserIsLoggedIn(user.name);

        await deleteUserAccount(page);
    });

    test('User cannot register with existing email @e2e @regression', async ({ page }) => {
        const existingUser = UserFactory.createDefault();
        await registerUser(page, existingUser);

        const homePage = new HomePage(page);
        await homePage.navBar.logout();

        const loginPage = new LoginPage(page);
        await loginPage.verifyIsAtLoginPage();
        await loginPage.signup(existingUser.name, existingUser.email);
        await loginPage.verifyEmailAlreadyExistsError();
        await loginPage.login(existingUser.email, existingUser.password);

        await homePage.verifyIsAtHomePage();
        await homePage.navBar.verifyUserIsLoggedIn(existingUser.name);

        await deleteUserAccount(page);
    });
});