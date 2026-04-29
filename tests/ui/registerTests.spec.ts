import { test } from '../setup';
import { UserFactory } from '../../factories/userFactory';
import { registerUser } from '../../flows/registerFlow';
import { deleteUserAccount } from '../../flows/deleteAccountFlow';


test.describe('Register tests @register', () => {

    test.beforeEach(async ({ pages }) => {
        await pages.homePage.open();
    });

    test('User can register successfully @smoke', async ({ pages }) => {
        const newUser = UserFactory.createDefault();
        await registerUser(pages, newUser);
        await deleteUserAccount(pages);
    });

    test('Newly registered user can login successfully @e2e', async ({ pages }) => {
        const {
            homePage,
            loginPage
        } = pages;

        const user = UserFactory.createDefault();
        await registerUser(pages, user);

        await homePage.navBar.logout();

        await loginPage.verifyIsAtLoginPage();
        await loginPage.login(user.email, user.password);

        await homePage.verifyIsAtHomePage();
        await homePage.navBar.verifyUserIsLoggedIn(user.name);

        await deleteUserAccount(pages);
    });

    test('User cannot register with existing email @e2e @regression', async ({ pages }) => {
        const {
            homePage,
            loginPage
        } = pages;

        const existingUser = UserFactory.createDefault();
        await registerUser(pages, existingUser);

        await homePage.navBar.logout();

        await loginPage.verifyIsAtLoginPage();
        await loginPage.signup(existingUser.name, existingUser.email);
        await loginPage.verifyEmailAlreadyExistsError();
        await loginPage.login(existingUser.email, existingUser.password);

        await homePage.verifyIsAtHomePage();
        await homePage.navBar.verifyUserIsLoggedIn(existingUser.name);

        await deleteUserAccount(pages);
    });
});