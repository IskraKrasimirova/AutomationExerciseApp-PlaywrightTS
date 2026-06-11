import { test, expect } from '../setup';
import { UserApiHelper } from '../api/helpers/userApiHelper';
import { ApiUserModel } from '../../models/apiUserModel';
import { UserModel } from '../../models/userModel';
import { UserFactory } from '../../factories/userFactory';
import { validateApiUser } from '../../utils/api/userValidator';

test.describe('@ui @api @e2e User Login & Deletion Flow (API → UI)', () => {

    let apiHelper: UserApiHelper;
    let user: ApiUserModel;

    test.beforeEach(async ({ request }) => {
        test.info().annotations.push({ type: "tag", description: "e2e" });
        test.info().annotations.push({ type: "feature", description: "userFlow" });

        apiHelper = new UserApiHelper(request);

        // Create user via API
        user = await apiHelper.createUser();
    });

    test('User created via API can login and delete account via UI @smoke', async ({ pages }) => {
        const {
            homePage,
            loginPage,
            accountDeletedPage
        } = pages;

        await test.step('Open home page', async () => {
            await homePage.open();
            await homePage.acceptCookiesIfPresent();
        });

        await test.step('Navigate to login page', async () => {
            await homePage.navBar.goToLoginPage();
            await loginPage.verifyIsAtLoginPage();
        });

        await test.step('Login with API-created user', async () => {
            await loginPage.login(user.email, user.password);
            await homePage.verifyIsAtHomePage();
            await homePage.navBar.verifyUserIsLoggedIn(user.name);
        });

        await test.step('Delete account via UI', async () => {
            await homePage.navBar.deleteAccount();
            await accountDeletedPage.verifyAccountDeleted();
            await accountDeletedPage.clickContinue();
            await homePage.verifyIsAtHomePage();
        });

        await test.step('Verify user is deleted via API', async () => {
            const result = await apiHelper.tryGetUserDetail(user.email);
            expect(result.responseCode).toBe(404);
        });
    });

    test.afterEach(async () => {
        // Cleanup fallback (in case UI deletion fails)
        await apiHelper.deleteUser(user.email, user.password);
    });
});

test.describe('@ui @api @e2e User Registration Flow (UI → API)', () => {

    let apiHelper: UserApiHelper;
    let uiUser: UserModel;
    let expectedApiUser: ApiUserModel;

    test.beforeEach(async ({ request }) => {
        test.info().annotations.push({ type: "tag", description: "e2e" });
        test.info().annotations.push({ type: "feature", description: "userFlow" });

        apiHelper = new UserApiHelper(request);
    });

    test('User registered via UI exists in API @smoke', async ({ pages }) => {
        const {
            homePage,
            loginPage,
            signupPage,
            accountCreatedPage,
            accountDeletedPage
        } = pages;

        // 1) UI → Register user
        await test.step('Open home page', async () => {
            await homePage.open();
            await homePage.acceptCookiesIfPresent();
        });

        await test.step('Navigate to login page', async () => {
            await homePage.navBar.goToLoginPage();
            await loginPage.verifyIsAtLoginPage();
        });

        await test.step('Start signup process', async () => {
            uiUser = UserFactory.createDefault();
            await loginPage.signup(uiUser.name, uiUser.email);
        });

        await test.step('Register user via UI', async () => {
            await signupPage.verifyIsAtSignupPage(uiUser.name, uiUser.email);
            await signupPage.createAccount(uiUser);
        });

        await test.step('Verify account created', async () => {
            await accountCreatedPage.verifyAccountCreated();
        });

        // 2) Convert UI model → API model
        expectedApiUser = UserFactory.convertUiUserToApiUser(uiUser);

        // 3) API → Verify user exists
        await test.step('Verify user exists via API', async () => {
            const apiUser = await apiHelper.getUserDetailByEmail(uiUser.email);
            console.log(apiUser);
            console.log(expectedApiUser);

            validateApiUser(apiUser, expectedApiUser);
        });

        // 4) UI → Delete account
        await test.step('Delete account via UI', async () => {
            await accountCreatedPage.verifyAccountCreated();
            await accountCreatedPage.clickContinue();
            await homePage.verifyIsAtHomePage();
            await homePage.navBar.deleteAccount();
            await accountDeletedPage.verifyAccountDeleted();
            await accountDeletedPage.clickContinue();
            await homePage.verifyIsAtHomePage();
        });

        await test.step('Verify user is deleted via API', async () => {
            const result = await apiHelper.tryGetUserDetail(uiUser.email);
            expect(result.responseCode).toBe(404);
        });
    });

    test.afterEach(async () => {
        // Cleanup fallback (in case UI deletion fails)
        if (uiUser) {
            await apiHelper.deleteUser(uiUser.email, uiUser.password);
        }
    });
});
