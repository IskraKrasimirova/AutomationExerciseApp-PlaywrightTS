import { test } from '../setup';
import { registerUser } from '../../flows/registerFlow';
import { deleteUserAccount } from '../../flows/deleteAccountFlow';
import { UserFactory } from '../../factories/userFactory';
import { UserModel } from '../../models/userModel';

test.describe('Login tests @ui @login', () => {

    let user: UserModel;

    test.beforeEach(async ({ pages }) => {
        test.info().annotations.push({ type: "tag", description: "ui" });
        test.info().annotations.push({ type: "tag", description: "login" });

        const {
            homePage,
            loginPage
        } = pages;

        await homePage.open();
        // Create and register a user
        user = UserFactory.createDefault();
        await registerUser(pages, user);

        // Logout to prepare for login tests
        await homePage.navBar.logout();
        await loginPage.verifyIsAtLoginPage();
    });

    test.afterEach(async ({ pages }) => {
        const {
            homePage,
            loginPage
        } = pages;

        // Login again to delete the account
        if (await homePage.navBar.isUserLoggedIn()) {
            await homePage.navBar.logout();
            await loginPage.verifyIsAtLoginPage();
        }

        await loginPage.login(user.email, user.password);
        await homePage.verifyIsAtHomePage();
        await deleteUserAccount(pages);
    });

    test('User can login successfully @smoke', async ({ pages }) => {
        test.info().annotations.push({ type: "tag", description: "smoke" });

        const {
            homePage,
            loginPage
        } = pages;

        await loginPage.login(user.email, user.password);
        await homePage.verifyIsAtHomePage();
        await homePage.navBar.verifyUserIsLoggedIn(user.name);
    });

    test('User cannot login with wrong password @regression', async ({ pages }) => {
        test.info().annotations.push({ type: "tag", description: "regression" });

        const loginPage = pages.loginPage;

        await loginPage.login(user.email, 'wrongpassword');
        await loginPage.verifyInvalidCredentialsError();
    });

    test('User cannot login with non-existing email @regression', async ({ pages }) => {
        test.info().annotations.push({ type: "tag", description: "regression" });
        
        const loginPage = pages.loginPage;

        await loginPage.login('nonexisting@email.com', 'somepassword');
        await loginPage.verifyInvalidCredentialsError();
    });
});