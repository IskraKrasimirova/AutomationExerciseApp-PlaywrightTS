# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/loginApiTests.spec.ts >> @api @login Login API - /verifyLogin" >> @regression Login with valid email and invalid password returns 404
- Location: tests/api/loginApiTests.spec.ts:95:9

# Error details

```
TypeError: Cannot read properties of undefined (reading 'fullName')
```

```
TypeError: Cannot read properties of undefined (reading 'email')
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | import { config } from "../../utils/config";
  3   | import { ApiUrls } from "../../utils/api/apiUrls";
  4   | import { ApiUserModel } from "../../models/apiUserModel";
  5   | import { UserApiHelper } from "./helpers/userApiHelper";
  6   | 
  7   | test.describe('@api @login Login API - /verifyLogin"', () => {
  8   |     const verifyLoginApiEndpoint = config.api.baseUrl + ApiUrls.verifyLogin;
  9   |     let userApiHelper: UserApiHelper;
  10  |     let testUser: ApiUserModel;
  11  | 
  12  |     test.beforeEach(async ({ request }) => {
  13  |         test.info().annotations.push({ type: "tag", description: "api" });
  14  |         test.info().annotations.push({ type: "feature", description: "login" });
  15  |         // Create user via API to ensure we have a valid user for login tests
  16  |         userApiHelper = new UserApiHelper(request);
  17  |         testUser = await userApiHelper.createUser();
  18  |     });
  19  | 
  20  |     test.afterEach(async () => {
  21  |         // Clean up - delete the user created for the test
> 22  |         await userApiHelper.deleteUser(testUser.email, testUser.password);
      |                                                 ^ TypeError: Cannot read properties of undefined (reading 'email')
  23  |     });
  24  | 
  25  |     test('@smoke User can login successfully with valid credentials', async ({ request }) => {
  26  |         test.info().annotations.push({ type: "tag", description: "smoke" });
  27  | 
  28  |         const response = await request.post(verifyLoginApiEndpoint, {
  29  |             form: {
  30  |                 email: testUser.email,
  31  |                 password: testUser.password
  32  |             }
  33  |         });
  34  | 
  35  |         expect(response.status()).toBe(200);
  36  | 
  37  |         const body = await response.json();
  38  |         expect(body.responseCode).toBe(200);
  39  |         expect(body.message).toContain("User exists");
  40  |     });
  41  | 
  42  |     test("@regression Login with missing email returns 400", async ({ request }) => {
  43  |         test.info().annotations.push({ type: "tag", description: "regression" });
  44  | 
  45  |         const response = await request.post(verifyLoginApiEndpoint, {
  46  |             form: {
  47  |                 password: testUser.password
  48  |             }
  49  |         });
  50  | 
  51  |         expect(response.status()).toBe(200);
  52  | 
  53  |         const body = await response.json();
  54  |         expect(body.responseCode).toBe(400);
  55  |         expect(body.message).toBe(
  56  |             "Bad request, email or password parameter is missing in POST request."
  57  |         );
  58  |     });
  59  | 
  60  |     test("@regression Login with missing password returns 400", async ({ request }) => {
  61  |         test.info().annotations.push({ type: "tag", description: "regression" });
  62  |         
  63  |         const response = await request.post(verifyLoginApiEndpoint, {
  64  |             form: {
  65  |                 email: testUser.email
  66  |             }
  67  |         });
  68  | 
  69  |         expect(response.status()).toBe(200);
  70  | 
  71  |         const body = await response.json();
  72  |         expect(body.responseCode).toBe(400);
  73  |         expect(body.message).toBe(
  74  |             "Bad request, email or password parameter is missing in POST request."
  75  |         );
  76  |     });
  77  | 
  78  |     test("@regression Login with invalid email and valid password returns 404", async ({ request }) => {
  79  |         test.info().annotations.push({ type: "tag", description: "regression" });
  80  | 
  81  |         const response = await request.post(verifyLoginApiEndpoint, {
  82  |             form: {
  83  |                 email: "invalid@email.com",
  84  |                 password: testUser.password
  85  |             }
  86  |         });
  87  | 
  88  |         expect(response.status()).toBe(200);
  89  | 
  90  |         const body = await response.json();
  91  |         expect(body.responseCode).toBe(404);
  92  |         expect(body.message).toBe("User not found!");
  93  |     });
  94  | 
  95  |     test("@regression Login with valid email and invalid password returns 404", async ({ request }) => {
  96  |         test.info().annotations.push({ type: "tag", description: "regression" });
  97  | 
  98  |         const response = await request.post(verifyLoginApiEndpoint, {
  99  |             form: {
  100 |                 email: testUser.email,
  101 |                 password: "wrongpassword"
  102 |             }
  103 |         });
  104 | 
  105 |         expect(response.status()).toBe(200);
  106 | 
  107 |         const body = await response.json();
  108 |         expect(body.responseCode).toBe(404);
  109 |         expect(body.message).toBe("User not found!");
  110 |     });
  111 | 
  112 |     test("@regression Login with both invalid email and password returns 404", async ({ request }) => {
  113 |         test.info().annotations.push({ type: "tag", description: "regression" });
  114 | 
  115 |         const response = await request.post(verifyLoginApiEndpoint, {
  116 |             form: {
  117 |                 email: "invalidemail@test.com",
  118 |                 password: "wrongpassword"
  119 |             }
  120 |         });
  121 | 
  122 |         expect(response.status()).toBe(200);
```