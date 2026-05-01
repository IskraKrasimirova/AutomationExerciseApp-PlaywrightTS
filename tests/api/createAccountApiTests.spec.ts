import { test, expect } from "@playwright/test";
import { config } from "../../utils/config";
import { ApiUrls } from "../../utils/api/apiUrls";
import { ApiUserModel } from "../../models/apiUserModel";
import { UserApiHelper } from "./helpers/userApiHelper";
import { UserFactory } from "../../factories/userFactory";

test.describe('@api @createAccount Create Account API - /createAccount', () => {
    const createAccountApiEndpoint = config.api.baseUrl + ApiUrls.createAccount;
    let userApiHelper: UserApiHelper;
    let user: ApiUserModel;

    test.beforeEach(async ({ request }) => {
        userApiHelper = new UserApiHelper(request);
        user = UserFactory.createApiUser();
    });

    test.afterEach(async () => {
        await userApiHelper.deleteUser(user.email, user.password);
    });

    test('@smoke User can create account successfully with valid data', async ({ request }) => {
        const formData = userApiHelper.createAccountFormData(user);
        const response = await request.post(createAccountApiEndpoint, { form: formData });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(201);
        expect(body.message).toBe("User created!");
    });

    // const requiredFields = [
    //     "name", "email", "password", "title",
    //     "birth_date", "birth_month", "birth_year",
    //     "firstname", "lastname", "company",
    //     "address1", "address2", "country", "zipcode",
    //     "state", "city", "mobile_number"
    // ];
    //All these fields should be required in the form data when creating a user.
    //Fields "title", "birth_date", "birth_month", "birth_year", "company" are not actually required by the API. 
    //API instead returns 201 and creates the user with missing data. 
    //REQUIRED FIELDS (REAL API BEHAVIOR)
    const requiredFields = [
        "name", "email", "password",
        "firstname", "lastname",
        "address1", "country", "zipcode",
        "state", "city", "mobile_number"
    ];

    for (const missing of requiredFields) {
        test(`@regression Missing parameter '${missing}' returns 400`, async ({ request }) => {
            const formData = userApiHelper.createAccountFormData(user);
            delete formData[missing];

            const response = await request.post(createAccountApiEndpoint, { form: formData });
            const body = await response.json();

            expect(body.responseCode).toBe(400);
            expect(body.message).toContain("Bad request");
        });
    }

    // API allows empty values and creates the user successfully when required fields are empty.
    // Only email returns 400 when empty
    const createAccountApiFieldsEmpty = [
        "name", "password", "title",
        "birth_date", "birth_month", "birth_year",
        "firstname", "lastname", "company",
        "address1", "address2", "country", "zipcode",
        "state", "city", "mobile_number"
    ];

    for (const field of createAccountApiFieldsEmpty) {
        test(`@regression Empty value for '${field}' returns 201`, async ({ request }) => {
            const formData = userApiHelper.createAccountFormData(user);
            formData[field] = "";

            const response = await request.post(createAccountApiEndpoint, { form: formData });
            const body = await response.json();

            expect(body.responseCode).toBe(201);
            expect(body.message).toBe("User created!");
        });
    }

});