import { test } from '../setup';
import { UserFactory } from '../../factories/userFactory';
import { registerUser } from '../../flows/registerFlow';
import { deleteUserAccount } from '../../flows/deleteAccountFlow';


test.describe('Register tests @ui @register', () => {

    test.beforeEach(async ({ pages }) => {
        test.info().annotations.push({ type: "tag", description: "ui" });
        test.info().annotations.push({ type: "feature", description: "register" });

        await pages.homePage.open();
    });

    test.afterEach(async ({ pages }) => {
        try {
            await deleteUserAccount(pages);
        } catch (e) {
            test.info().annotations.push({ type: "warning", description: "User deletion skipped or failed" });

            await test.info().attach("deleteUserAccount error", {
                body: String(e),
                contentType: "text/plain"
            });
        }
    });

    test('User can register successfully @smoke', async ({ pages }) => {
        test.info().annotations.push({ type: "tag", description: "smoke" });

        const user = UserFactory.createDefault();
        await registerUser(pages, user);
    });

    test('Newly registered user can login successfully @e2e', async ({ pages }) => {
        test.info().annotations.push({ type: "tag", description: "e2e" });

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
    });

    test('User cannot register with existing email @e2e @regression', async ({ pages }) => {
        test.info().annotations.push({ type: "tag", description: "e2e" });
        test.info().annotations.push({ type: "tag", description: "regression" });

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
    });
});