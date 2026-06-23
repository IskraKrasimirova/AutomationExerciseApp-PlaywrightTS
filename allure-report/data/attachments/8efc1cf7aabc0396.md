# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/userFlows.spec.ts >> @ui @api @e2e User Registration Flow (UI → API) >> User cannot register with an existing email @regression
- Location: tests/ui/userFlows.spec.ts:231:9

# Error details

```
TypeError: Cannot read properties of undefined (reading 'fullName')
```

# Test source

```ts
  1  | import { UserModel } from "../models/userModel";
  2  | import { ApiUserModel } from "../models/apiUserModel";
  3  | //import { faker } from "@faker-js/faker";
  4  | const { faker } = require("@faker-js/faker");
  5  | 
  6  | 
  7  | const titles = ['Mr.', 'Mrs.'];
  8  | const countries = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore'];
  9  | 
  10 | export class UserFactory {
  11 |     static createDefault(): UserModel {
  12 |         const birthDate = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });
  13 | 
  14 |         return {
  15 |             name: faker.person.fullName(),
  16 |             email: faker.internet.email(),
  17 |             password: faker.internet.password(),
  18 |             title: faker.helpers.arrayElement(titles),
  19 |             dayOfBirth: birthDate.getDate().toString(),
  20 |             monthOfBirth: birthDate.toLocaleString('en-US', { month: 'long' }),
  21 |             yearOfBirth: birthDate.getFullYear().toString(),
  22 |             country: faker.helpers.arrayElement(countries),
  23 |             subscribeToNewsletter: true,
  24 |             receiveSpecialOffers: true,
  25 |             firstName: faker.person.firstName(),
  26 |             lastName: faker.person.lastName(),
  27 |             company: faker.company.name(),
  28 |             address: faker.location.streetAddress(),
  29 |             address2: faker.location.secondaryAddress(),
  30 |             state: faker.location.state(),
  31 |             city: faker.location.city(),
  32 |             zipcode: faker.location.zipCode(),
  33 |             mobileNumber: faker.phone.number()
  34 |         };
  35 |     }
  36 | 
  37 |     static createApiUser(): ApiUserModel {
  38 |         const birthDate = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });
  39 | 
  40 |         return {
> 41 |             name: faker.person.fullName(),
     |                                ^ TypeError: Cannot read properties of undefined (reading 'fullName')
  42 |             email: faker.internet.email(),
  43 |             password: faker.internet.password(),
  44 |             title: faker.helpers.arrayElement(titles),
  45 |             dayOfBirth: birthDate.getDate().toString(),
  46 |             monthOfBirth: (birthDate.getMonth() + 1).toString().padStart(2, "0"),
  47 |             yearOfBirth: birthDate.getFullYear().toString(),
  48 |             country: faker.helpers.arrayElement(countries),
  49 |             firstName: faker.person.firstName(),
  50 |             lastName: faker.person.lastName(),
  51 |             company: faker.company.name(),
  52 |             address: faker.location.streetAddress(),
  53 |             address2: faker.location.secondaryAddress(),
  54 |             state: faker.location.state(),
  55 |             city: faker.location.city(),
  56 |             zipcode: faker.location.zipCode(),
  57 |             mobileNumber: faker.phone.number()
  58 |         };
  59 |     }
  60 | 
  61 |     static convertUiUserToApiUser(uiModel: UserModel): ApiUserModel {
  62 |         // Convert month name → month number ("January" → "01")
  63 |         const monthNumber = new Date(`${uiModel.monthOfBirth} 1, 2000`).getMonth() + 1;
  64 | 
  65 |         return {
  66 |             name: uiModel.name,
  67 |             email: uiModel.email,
  68 |             password: uiModel.password,
  69 |             title: uiModel.title, 
  70 |             dayOfBirth: uiModel.dayOfBirth,
  71 |             monthOfBirth: monthNumber.toString(),
  72 |             yearOfBirth: uiModel.yearOfBirth,
  73 |             firstName: uiModel.firstName,
  74 |             lastName: uiModel.lastName,
  75 |             company: uiModel.company,
  76 |             address: uiModel.address,
  77 |             address2: uiModel.address2,
  78 |             country: uiModel.country,
  79 |             state: uiModel.state,
  80 |             city: uiModel.city,
  81 |             zipcode: uiModel.zipcode,
  82 |             mobileNumber: uiModel.mobileNumber
  83 |         };
  84 |     }
  85 | }
```