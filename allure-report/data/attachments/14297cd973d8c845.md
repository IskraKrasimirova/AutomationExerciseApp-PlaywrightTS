# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/createAccountApiTests.spec.ts >> @api @createAccount Create Account API - /createAccount >> @regression Missing parameter 'firstname' returns 400
- Location: tests/api/createAccountApiTests.spec.ts:57:13

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
  6   | import { UserFactory } from "../../factories/userFactory";
  7   | 
  8   | test.describe('@api @createAccount Create Account API - /createAccount', () => {
  9   |     const createAccountApiEndpoint = config.api.baseUrl + ApiUrls.createAccount;
  10  |     let userApiHelper: UserApiHelper;
  11  |     let user: ApiUserModel;
  12  | 
  13  |     test.beforeEach(async ({ request }) => {
  14  |         test.info().annotations.push({ type: "tag", description: "api" });
  15  |         test.info().annotations.push({ type: "feature", description: "createAccount" });
  16  | 
  17  |         userApiHelper = new UserApiHelper(request);
  18  |         user = UserFactory.createApiUser();
  19  |     });
  20  | 
  21  |     test.afterEach(async () => {
> 22  |         await userApiHelper.deleteUser(user.email, user.password);
      |                                             ^ TypeError: Cannot read properties of undefined (reading 'email')
  23  |     });
  24  | 
  25  |     test('@smoke User can create account successfully with valid data', async ({ request }) => {
  26  |         test.info().annotations.push({ type: "tag", description: "smoke" });
  27  | 
  28  |         const formData = userApiHelper.createAccountFormData(user);
  29  |         const response = await request.post(createAccountApiEndpoint, { form: formData });
  30  | 
  31  |         expect(response.status()).toBe(200);
  32  | 
  33  |         const body = await response.json();
  34  |         expect(body.responseCode).toBe(201);
  35  |         expect(body.message).toBe("User created!");
  36  |     });
  37  | 
  38  |     // const requiredFields = [
  39  |     //     "name", "email", "password", "title",
  40  |     //     "birth_date", "birth_month", "birth_year",
  41  |     //     "firstname", "lastname", "company",
  42  |     //     "address1", "address2", "country", "zipcode",
  43  |     //     "state", "city", "mobile_number"
  44  |     // ];
  45  |     //All these fields should be required in the form data when creating a user.
  46  |     //Fields "title", "birth_date", "birth_month", "birth_year", "company" are not actually required by the API. 
  47  |     //API instead returns 201 and creates the user with missing data. 
  48  |     //REQUIRED FIELDS (REAL API BEHAVIOR)
  49  |     const requiredFields = [
  50  |         "name", "email", "password",
  51  |         "firstname", "lastname",
  52  |         "address1", "country", "zipcode",
  53  |         "state", "city", "mobile_number"
  54  |     ];
  55  | 
  56  |     for (const missing of requiredFields) {
  57  |         test(`@regression Missing parameter '${missing}' returns 400`, async ({ request }) => {
  58  |             test.info().annotations.push({ type: "tag", description: "regression" });
  59  | 
  60  |             const formData = userApiHelper.createAccountFormData(user);
  61  |             delete formData[missing];
  62  | 
  63  |             const response = await request.post(createAccountApiEndpoint, { form: formData });
  64  |             const body = await response.json();
  65  | 
  66  |             expect(body.responseCode).toBe(400);
  67  |             expect(body.message).toContain("Bad request");
  68  |         });
  69  |     }
  70  | 
  71  |     // API allows empty values and creates the user successfully when required fields are empty.
  72  |     // Only email returns 400 when empty
  73  |     const createAccountApiFieldsEmpty = [
  74  |         "name", "password", "title",
  75  |         "birth_date", "birth_month", "birth_year",
  76  |         "firstname", "lastname", "company",
  77  |         "address1", "address2", "country", "zipcode",
  78  |         "state", "city", "mobile_number"
  79  |     ];
  80  | 
  81  |     for (const field of createAccountApiFieldsEmpty) {
  82  |         test(`@regression Empty value for '${field}' returns 201`, async ({ request }) => {
  83  |             test.info().annotations.push({ type: "tag", description: "regression" });
  84  | 
  85  |             const formData = userApiHelper.createAccountFormData(user);
  86  |             formData[field] = "";
  87  | 
  88  |             const response = await request.post(createAccountApiEndpoint, { form: formData });
  89  |             const body = await response.json();
  90  | 
  91  |             expect(body.responseCode).toBe(201);
  92  |             expect(body.message).toBe("User created!");
  93  |         });
  94  |     }
  95  | 
  96  |     const invalidEmails = [
  97  |         "invalid",
  98  |         "test@",
  99  |         "test@test",
  100 |         "@domain.com",
  101 |         "a@b",
  102 |         "12345",
  103 |         "email@domain",
  104 |         "email@domain.",
  105 |         "email@.com",
  106 |         ""
  107 |     ];
  108 | 
  109 |     for (const invalid of invalidEmails) {
  110 |         test(`@regression Invalid email '${invalid}' returns 400`, async ({ request }) => {
  111 |             test.info().annotations.push({ type: "tag", description: "regression" });
  112 | 
  113 |             const formData = userApiHelper.createAccountFormData(user);
  114 |             formData.email = invalid;
  115 | 
  116 |             const response = await request.post(createAccountApiEndpoint, { form: formData });
  117 |             const body = await response.json();
  118 | 
  119 |             expect(body.responseCode).toBe(400);
  120 |             //expect(body.message).toContain("Bad request");
  121 |             // API returns "Email already exists!"
  122 |         });
```