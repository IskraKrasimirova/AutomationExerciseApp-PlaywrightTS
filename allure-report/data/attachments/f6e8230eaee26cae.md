# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/userAccountTests.spec.ts >> @api Update Account API - /updateAccount >> @smoke User can update account successfully with valid data
- Location: tests/api/userAccountTests.spec.ts:105:9

# Error details

```
TypeError: Cannot read properties of undefined (reading 'fullName')
```

```
TypeError: Cannot read properties of undefined (reading 'email')
```

# Test source

```ts
  2   | import { config } from "../../utils/config";
  3   | import { ApiUrls } from "../../utils/api/apiUrls";
  4   | import { ApiUserModel } from "../../models/apiUserModel";
  5   | import { UserApiHelper } from "./helpers/userApiHelper";
  6   | import { UserFactory } from "../../factories/userFactory";
  7   | 
  8   | test.describe('@api @deleteAccount Delete Account API - /deleteAccount', () => {
  9   |     const deleteAccountApiEndpoint = config.api.baseUrl + ApiUrls.deleteAccount;
  10  |     let userApiHelper: UserApiHelper;
  11  |     let user: ApiUserModel;
  12  | 
  13  |     test.beforeEach(async ({ request }) => {
  14  |         test.info().annotations.push({ type: "tag", description: "api" });
  15  |         test.info().annotations.push({ type: "feature", description: "deleteAccount" });
  16  | 
  17  |         userApiHelper = new UserApiHelper(request);
  18  |         user = UserFactory.createApiUser();
  19  | 
  20  |         const formData = userApiHelper.createAccountFormData(user);
  21  |         const response = await request.post(config.api.baseUrl + ApiUrls.createAccount, { form: formData });
  22  |         expect(response.status()).toBe(200);
  23  |     });
  24  | 
  25  |     test.afterEach(async () => {
  26  |         await userApiHelper.deleteUser(user.email, user.password);
  27  |     });
  28  | 
  29  |     test('@smoke User can delete account successfully with valid credentials', async ({ request }) => {
  30  |         test.info().annotations.push({ type: "tag", description: "smoke" });
  31  | 
  32  |         const response = await request.delete(deleteAccountApiEndpoint, {
  33  |             form: {
  34  |                 email: user.email,
  35  |                 password: user.password
  36  |             }
  37  |         });
  38  | 
  39  |         expect(response.status()).toBe(200);
  40  | 
  41  |         const body = await response.json();
  42  |         expect(body.responseCode).toBe(200);
  43  |         expect(body.message).toBe("Account deleted!");
  44  |     });
  45  | 
  46  |     test('@regression Deleting account with invalid credentials returns 404', async ({ request }) => {
  47  |         test.info().annotations.push({ type: "tag", description: "regression" });
  48  | 
  49  |         const response = await request.delete(deleteAccountApiEndpoint, {
  50  |             form: {
  51  |                 email: user.email,
  52  |                 password: "wrongpassword"
  53  |             }
  54  |         });
  55  | 
  56  |         expect(response.status()).toBe(200);
  57  | 
  58  |         const body = await response.json();
  59  |         expect(body.responseCode).toBe(404);
  60  |         expect(body.message).toContain("not found");
  61  |     });
  62  | 
  63  |     test('@regression Deleting non-existing user returns 404', async ({ request }) => {
  64  |         test.info().annotations.push({ type: "tag", description: "regression" });
  65  | 
  66  |         // Delete once
  67  |         await request.delete(deleteAccountApiEndpoint, {
  68  |             form: { email: user.email, password: user.password }
  69  |         });
  70  | 
  71  |         // Delete again → user no longer exists
  72  |         const response = await request.delete(deleteAccountApiEndpoint, {
  73  |             form: { email: user.email, password: user.password }
  74  |         });
  75  | 
  76  |         expect(response.status()).toBe(200);
  77  | 
  78  |         const body = await response.json();
  79  |         expect(body.responseCode).toBe(404);
  80  |         expect(body.message).toContain("not found");
  81  |     });
  82  | });
  83  | 
  84  | test.describe('@api Update Account API - /updateAccount', () => {
  85  |     const updateAccountApiEndpoint = config.api.baseUrl + ApiUrls.updateAccount;
  86  |     let userApiHelper: UserApiHelper;
  87  |     let user: ApiUserModel;
  88  | 
  89  |     test.beforeEach(async ({ request }) => {
  90  |         test.info().annotations.push({ type: "tag", description: "api" });
  91  |         test.info().annotations.push({ type: "feature", description: "updateAccount" });
  92  | 
  93  |         userApiHelper = new UserApiHelper(request);
  94  |         user = UserFactory.createApiUser();
  95  | 
  96  |         const formData = userApiHelper.createAccountFormData(user);
  97  |         const response = await request.post(config.api.baseUrl + ApiUrls.createAccount, { form: formData });
  98  |         expect(response.status()).toBe(200);
  99  |     });
  100 | 
  101 |     test.afterEach(async () => {
> 102 |         await userApiHelper.deleteUser(user.email, user.password);
      |                                             ^ TypeError: Cannot read properties of undefined (reading 'email')
  103 |     });
  104 | 
  105 |     test('@smoke User can update account successfully with valid data', async ({ request }) => {
  106 |         test.info().annotations.push({ type: "tag", description: "smoke" });
  107 | 
  108 |         const updatedUser = { ...user, name: "Updated Name" };
  109 |         const formData = userApiHelper.createAccountFormData(updatedUser);
  110 |         const response = await request.put(updateAccountApiEndpoint, { form: formData });
  111 | 
  112 |         expect(response.status()).toBe(200);
  113 | 
  114 |         const body = await response.json();
  115 |         expect(body.responseCode).toBe(200);
  116 |         expect(body.message).toBe("User updated!");
  117 |     });
  118 | 
  119 |     test('@regression Updating account with invalid email format returns 404', async ({ request }) => {
  120 |         test.info().annotations.push({ type: "tag", description: "regression" });
  121 | 
  122 |         const updatedUser = { ...user, email: "invalidemail" };
  123 |         const formData = userApiHelper.createAccountFormData(updatedUser);
  124 |         const response = await request.put(updateAccountApiEndpoint, { form: formData });
  125 | 
  126 |         expect(response.status()).toBe(200);
  127 | 
  128 |         const body = await response.json();
  129 |         expect(body.responseCode).toBe(404);
  130 |         expect(body.message).toContain("not found");
  131 |     });
  132 | 
  133 |     test('@regression Updating account with missing email returns 400', async ({ request }) => {
  134 |         test.info().annotations.push({ type: "tag", description: "regression" });
  135 | 
  136 |         const formData = userApiHelper.createAccountFormData(user);
  137 |         delete formData.email; // Remove required field email
  138 |         const response = await request.put(updateAccountApiEndpoint, { form: formData });
  139 | 
  140 |         expect(response.status()).toBe(200);
  141 | 
  142 |         const body = await response.json();
  143 |         expect(body.responseCode).toBe(400);
  144 |         expect(body.message).toContain("Bad request");
  145 |     });
  146 | 
  147 |     test('@regression Updating non-existing user returns 404', async ({ request }) => {
  148 |         test.info().annotations.push({ type: "tag", description: "regression" });
  149 | 
  150 |         const formData = userApiHelper.createAccountFormData(user);
  151 |         // First delete the user to ensure it does not exist
  152 |         await userApiHelper.deleteUser(user.email, user.password);
  153 |         // Then attempt to update the deleted user
  154 |         const response = await request.put(updateAccountApiEndpoint, { form: formData });
  155 | 
  156 |         expect(response.status()).toBe(200);
  157 | 
  158 |         const body = await response.json();
  159 |         expect(body.responseCode).toBe(404);
  160 |         expect(body.message).toContain("not found");
  161 |     });
  162 | });
  163 | 
  164 | test.describe('@api Get User Detail API - /getUserDetailByEmail', () => {
  165 |     const getUserDetailApiEndpoint = config.api.baseUrl + ApiUrls.userDetailByEmail;
  166 |     let userApiHelper: UserApiHelper;
  167 |     let user: ApiUserModel;
  168 | 
  169 |     test.beforeEach(async ({ request }) => {
  170 |         test.info().annotations.push({ type: "tag", description: "api" });
  171 |         test.info().annotations.push({ type: "feature", description: "getUserDetail" });
  172 | 
  173 |         userApiHelper = new UserApiHelper(request);
  174 |         user = UserFactory.createApiUser();
  175 | 
  176 |         const formData = userApiHelper.createAccountFormData(user);
  177 |         const response = await request.post(config.api.baseUrl + ApiUrls.createAccount, { form: formData });
  178 |         expect(response.status()).toBe(200);
  179 |     });
  180 | 
  181 |     test.afterEach(async () => {
  182 |         await userApiHelper.deleteUser(user.email, user.password);
  183 |     });
  184 | 
  185 |     test('@smoke User can retrieve account details successfully with valid email', async ({ request }) => {
  186 |         test.info().annotations.push({ type: "tag", description: "smoke" });
  187 |         
  188 |         const response = await request.get(getUserDetailApiEndpoint, {
  189 |             params: { email: user.email }
  190 |         });
  191 | 
  192 |         expect(response.status()).toBe(200);
  193 | 
  194 |         const body = await response.json();
  195 |         expect(body.responseCode).toBe(200);
  196 |         expect(body.user.email).toBe(user.email);
  197 |     });
  198 | 
  199 |     test('@regression Retrieving account details for non-existent user returns 404', async ({ request }) => {
  200 |         test.info().annotations.push({ type: "tag", description: "regression" });
  201 | 
  202 |         const response = await request.get(getUserDetailApiEndpoint, {
```