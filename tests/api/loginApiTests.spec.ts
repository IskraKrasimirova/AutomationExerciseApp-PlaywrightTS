import { test, expect } from "@playwright/test";
import { config } from "../../utils/config";
import { ApiUrls } from "../../utils/api/apiUrls";
import { ApiUserModel } from "../../models/apiUserModel";
import { UserApiHelper } from "./helpers/userApiHelper";

test.describe('@api @login Login API - /verifyLogin"', () => {
    let userApiHelper: UserApiHelper;
    let testUser: ApiUserModel;

    test.beforeEach(async ({ request }) => {
        // Create user via API to ensure we have a valid user for login tests
        userApiHelper = new UserApiHelper(request);
        testUser = await userApiHelper.createUser();
    });

    test.afterEach(async () => {
        // Clean up - delete the user created for the test
        await userApiHelper.deleteUser(testUser.email, testUser.password);
    });

    test('@smoke User can login successfully with valid credentials', async ({ request }) => {
        const verifyLoginApiEndpoint = config.api.baseUrl + ApiUrls.verifyLogin;
        const response = await request.post(verifyLoginApiEndpoint, {
            form: {
                email: testUser.email,
                password: testUser.password
            }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(200);
        expect(body.message).toContain("User exists");
    });
});