# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/loginTests.spec.ts >> Login tests @ui @login >> User cannot login with non-existing email @regression
- Location: tests/ui/loginTests.spec.ts:69:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - text: 403 Forbidden
    - generic [ref=e4]:
      - text: Please forward this error screen to automationexercise.com's
      - link "WebMaster" [ref=e5] [cursor=pointer]:
        - /url: mailto:webmaster@automationexercise.com?subject=Error message [403] (none) for automationexercise.com/ port 443 on Monday, 29-Jun-2026 02:32:46 MST
      - text: .
    - paragraph [ref=e6]: "Access is forbidden to the requested page:"
  - list [ref=e10]:
    - listitem [ref=e11]:
      - img [ref=e12]
      - generic [ref=e13]: automationexercise.com/ (port 443)
    - listitem
  - contentinfo [ref=e14]:
    - generic [ref=e15]:
      - link "cPanel, Inc." [ref=e16] [cursor=pointer]:
        - /url: http://cpanel.com/?utm_source=cpanelwhm&utm_medium=cplogo&utm_content=logolink&utm_campaign=403referral
        - img "cPanel, Inc." [ref=e17]
      - generic [ref=e18]:
        - link "Copyright © 2020 cPanel, L.L.C." [ref=e19] [cursor=pointer]:
          - /url: http://cpanel.com/?utm_source=cpanelwhm&utm_medium=cplogo&utm_content=logolink&utm_campaign=403referral
        - link "Privacy Policy" [ref=e20] [cursor=pointer]:
          - /url: https://go.cpanel.net/privacy
```

# Test source

```ts
  1  | import { test } from '../setup';
  2  | import { registerUser } from '../../flows/registerFlow';
  3  | import { deleteUserAccount } from '../../flows/deleteAccountFlow';
  4  | import { UserFactory } from '../../factories/userFactory';
  5  | import { UserModel } from '../../models/userModel';
  6  | 
  7  | test.describe('Login tests @ui @login', () => {
  8  | 
  9  |     let user: UserModel;
  10 | 
  11 |     test.beforeEach(async ({ pages }) => {
  12 |         test.info().annotations.push({ type: "tag", description: "ui" });
  13 |         test.info().annotations.push({ type: "feature", description: "login" });
  14 | 
  15 |         const {
  16 |             homePage,
  17 |             loginPage
  18 |         } = pages;
  19 | 
  20 |         await homePage.open();
  21 |         // Create and register a user
  22 |         user = UserFactory.createDefault();
  23 |         await registerUser(pages, user);
  24 | 
  25 |         // Logout to prepare for login tests
  26 |         await homePage.navBar.logout();
  27 |         await loginPage.verifyIsAtLoginPage();
  28 |     });
  29 | 
> 30 |     test.afterEach(async ({ pages }) => {
     |          ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  31 |         const {
  32 |             homePage,
  33 |             loginPage
  34 |         } = pages;
  35 | 
  36 |         // Login again to delete the account
  37 |         if (await homePage.navBar.isUserLoggedIn()) {
  38 |             await homePage.navBar.logout();
  39 |             await loginPage.verifyIsAtLoginPage();
  40 |         }
  41 | 
  42 |         await loginPage.login(user.email, user.password);
  43 |         await homePage.verifyIsAtHomePage();
  44 |         await deleteUserAccount(pages);
  45 |     });
  46 | 
  47 |     test('User can login successfully @smoke', async ({ pages }) => {
  48 |         test.info().annotations.push({ type: "tag", description: "smoke" });
  49 | 
  50 |         const {
  51 |             homePage,
  52 |             loginPage
  53 |         } = pages;
  54 | 
  55 |         await loginPage.login(user.email, user.password);
  56 |         await homePage.verifyIsAtHomePage();
  57 |         await homePage.navBar.verifyUserIsLoggedIn(user.name);
  58 |     });
  59 | 
  60 |     test('User cannot login with wrong password @regression', async ({ pages }) => {
  61 |         test.info().annotations.push({ type: "tag", description: "regression" });
  62 | 
  63 |         const loginPage = pages.loginPage;
  64 | 
  65 |         await loginPage.login(user.email, 'wrongpassword');
  66 |         await loginPage.verifyInvalidCredentialsError();
  67 |     });
  68 | 
  69 |     test('User cannot login with non-existing email @regression', async ({ pages }) => {
  70 |         test.info().annotations.push({ type: "tag", description: "regression" });
  71 | 
  72 |         const loginPage = pages.loginPage;
  73 | 
  74 |         await loginPage.login('nonexisting@email.com', 'somepassword');
  75 |         await loginPage.verifyInvalidCredentialsError();
  76 |     });
  77 | });
```