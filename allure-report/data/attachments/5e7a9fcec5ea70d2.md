# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/userFlows.spec.ts >> @ui @api @e2e User Login & Deletion Flow (API → UI) >> Login fails with SQL-like injection attempt (UI validation) @regression
- Location: tests/ui/userFlows.spec.ts:104:9

# Error details

```
Error: expect(received).toMatch(expected)

Expected pattern: /@/i
Received string:  "Enter an email address"
```

# Test source

```ts
  13  |     test.beforeEach(async ({ request }) => {
  14  |         test.info().annotations.push({ type: "tag", description: "e2e" });
  15  |         test.info().annotations.push({ type: "feature", description: "userFlow" });
  16  | 
  17  |         apiHelper = new UserApiHelper(request);
  18  | 
  19  |         // Create user via API
  20  |         user = await apiHelper.createUser();
  21  |     });
  22  | 
  23  |     test('User created via API can login and delete account via UI @smoke', async ({ pages }) => {
  24  |         const {
  25  |             homePage,
  26  |             loginPage,
  27  |             accountDeletedPage
  28  |         } = pages;
  29  | 
  30  |         await test.step('Open home page', async () => {
  31  |             await homePage.open();
  32  |             await homePage.acceptCookiesIfPresent();
  33  |         });
  34  | 
  35  |         await test.step('Navigate to login page', async () => {
  36  |             await homePage.navBar.goToLoginPage();
  37  |             await loginPage.verifyIsAtLoginPage();
  38  |         });
  39  | 
  40  |         await test.step('Login with API-created user', async () => {
  41  |             await loginPage.login(user.email, user.password);
  42  |             await homePage.verifyIsAtHomePage();
  43  |             await homePage.navBar.verifyUserIsLoggedIn(user.name);
  44  |         });
  45  | 
  46  |         await test.step('Delete account via UI', async () => {
  47  |             await homePage.navBar.deleteAccount();
  48  |             await accountDeletedPage.verifyAccountDeleted();
  49  |             await accountDeletedPage.clickContinue();
  50  |             await homePage.verifyIsAtHomePage();
  51  |         });
  52  | 
  53  |         await test.step('Verify user is deleted via API', async () => {
  54  |             const result = await apiHelper.tryGetUserDetail(user.email);
  55  |             expect(result.responseCode).toBe(404);
  56  |         });
  57  |     });
  58  | 
  59  |     test('Login fails with wrong password @regression', async ({ pages }) => {
  60  |         const { homePage, loginPage } = pages;
  61  | 
  62  |         await homePage.open();
  63  |         await homePage.acceptCookiesIfPresent();
  64  |         await homePage.navBar.goToLoginPage();
  65  | 
  66  |         await loginPage.verifyIsAtLoginPage();
  67  |         await loginPage.login(user.email, 'WRONG_PASSWORD');
  68  | 
  69  |         await loginPage.verifyInvalidCredentialsError();
  70  | 
  71  |         // API → verify user still exists
  72  |         const result = await apiHelper.tryGetUserDetail(user.email);
  73  |         expect(result.responseCode).toBe(200);
  74  |     });
  75  | 
  76  |     test('Login fails with wrong email @regression', async ({ pages }) => {
  77  |         const { homePage, loginPage } = pages;
  78  | 
  79  |         await homePage.open();
  80  |         await homePage.navBar.goToLoginPage();
  81  | 
  82  |         await loginPage.login('wrong_' + user.email, user.password);
  83  |         await loginPage.verifyInvalidCredentialsError();
  84  | 
  85  |         const result = await apiHelper.tryGetUserDetail(user.email);
  86  |         expect(result.responseCode).toBe(200);
  87  |     });
  88  | 
  89  |     test('Login fails with empty fields (UI validation) @regression', async ({ pages }) => {
  90  |         const { homePage, loginPage } = pages;
  91  | 
  92  |         await homePage.open();
  93  |         await homePage.navBar.goToLoginPage();
  94  | 
  95  |         await loginPage.login('', '');
  96  | 
  97  |         // HTML5 validation → email field must show error
  98  |         expect(await loginPage.getEmailValidationMessage()).toContain('fill');
  99  | 
  100 |         const result = await apiHelper.tryGetUserDetail(user.email);
  101 |         expect(result.responseCode).toBe(200);
  102 |     });
  103 | 
  104 |     test('Login fails with SQL-like injection attempt (UI validation) @regression', async ({ pages }) => {
  105 |         const { homePage, loginPage } = pages;
  106 | 
  107 |         await homePage.open();
  108 |         await homePage.navBar.goToLoginPage();
  109 | 
  110 |         await loginPage.login(`${user.email} OR 1=1 --`, '123456');
  111 | 
  112 |         const validationMessage = await loginPage.getEmailValidationMessage();
> 113 |         expect(validationMessage).toMatch(/@/i); // Expect HTML5 validation error
      |                                   ^ Error: expect(received).toMatch(expected)
  114 | 
  115 |         const result = await apiHelper.tryGetUserDetail(user.email);
  116 |         expect(result.responseCode).toBe(200);
  117 |     });
  118 | 
  119 |     test('Login fails with uppercase email @regression', async ({ pages }) => {
  120 |         const { homePage, loginPage } = pages;
  121 | 
  122 |         await homePage.open();
  123 |         await homePage.navBar.goToLoginPage();
  124 | 
  125 |         await loginPage.login(user.email.toUpperCase(), user.password);
  126 |         await loginPage.verifyInvalidCredentialsError();
  127 | 
  128 |         const result = await apiHelper.tryGetUserDetail(user.email);
  129 |         expect(result.responseCode).toBe(200);
  130 |     });
  131 | 
  132 |     test('Multiple failed login attempts do not affect account @regression', async ({ pages }) => {
  133 |         const { homePage, loginPage } = pages;
  134 | 
  135 |         await homePage.open();
  136 |         await homePage.navBar.goToLoginPage();
  137 | 
  138 |         for (let i = 0; i < 5; i++) {
  139 |             await loginPage.login(user.email, 'wrongPassword' + i);
  140 |             await loginPage.verifyInvalidCredentialsError();
  141 |             // Reset form
  142 |             await homePage.navBar.goToLoginPage();
  143 |         }
  144 | 
  145 |         const result = await apiHelper.tryGetUserDetail(user.email);
  146 |         expect(result.responseCode).toBe(200);
  147 |     });
  148 | 
  149 |     test.afterEach(async () => {
  150 |         // Cleanup fallback (in case UI deletion fails)
  151 |         await apiHelper.deleteUser(user.email, user.password);
  152 |     });
  153 | });
  154 | 
  155 | test.describe('@ui @api @e2e User Registration Flow (UI → API)', () => {
  156 | 
  157 |     let apiHelper: UserApiHelper;
  158 |     let uiUser: UserModel;
  159 |     let expectedApiUser: ApiUserModel;
  160 | 
  161 |     test.beforeEach(async ({ request }) => {
  162 |         test.info().annotations.push({ type: "tag", description: "e2e" });
  163 |         test.info().annotations.push({ type: "feature", description: "userFlow" });
  164 | 
  165 |         apiHelper = new UserApiHelper(request);
  166 |     });
  167 | 
  168 |     test('User registered via UI exists in API @smoke', async ({ pages }) => {
  169 |         const {
  170 |             homePage,
  171 |             loginPage,
  172 |             signupPage,
  173 |             accountCreatedPage,
  174 |             accountDeletedPage
  175 |         } = pages;
  176 | 
  177 |         // 1) UI → Register user
  178 |         await test.step('Open home page', async () => {
  179 |             await homePage.open();
  180 |             await homePage.acceptCookiesIfPresent();
  181 |         });
  182 | 
  183 |         await test.step('Navigate to login page', async () => {
  184 |             await homePage.navBar.goToLoginPage();
  185 |             await loginPage.verifyIsAtLoginPage();
  186 |         });
  187 | 
  188 |         await test.step('Start signup process', async () => {
  189 |             uiUser = UserFactory.createDefault();
  190 |             await loginPage.signup(uiUser.name, uiUser.email);
  191 |         });
  192 | 
  193 |         await test.step('Register user via UI', async () => {
  194 |             await signupPage.verifyIsAtSignupPage(uiUser.name, uiUser.email);
  195 |             await signupPage.createAccount(uiUser);
  196 |         });
  197 | 
  198 |         await test.step('Verify account created', async () => {
  199 |             await accountCreatedPage.verifyAccountCreated();
  200 |         });
  201 | 
  202 |         // 2) Convert UI model → API model
  203 |         expectedApiUser = UserFactory.convertUiUserToApiUser(uiUser);
  204 | 
  205 |         // 3) API → Verify user exists
  206 |         await test.step('Verify user exists via API', async () => {
  207 |             const apiUser = await apiHelper.getUserDetailByEmail(uiUser.email);
  208 |             console.log(apiUser);
  209 |             console.log(expectedApiUser);
  210 | 
  211 |             validateApiUser(apiUser, expectedApiUser);
  212 |         });
  213 | 
```