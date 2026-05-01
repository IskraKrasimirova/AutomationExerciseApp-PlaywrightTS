import { test, expect } from "@playwright/test";
import { config } from "../../utils/config";
import { ApiUrls } from "../../utils/api/apiUrls";
import { ApiUserModel } from "../../models/apiUserModel";
import { UserApiHelper } from "./helpers/userApiHelper";

test.describe('@api @login Login API - /verifyLogin"', () => {
    const verifyLoginApiEndpoint = config.api.baseUrl + ApiUrls.verifyLogin;
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

    test("@regression Login with missing email returns 400", async ({ request }) => {
        const response = await request.post(verifyLoginApiEndpoint, {
            form: {
                password: testUser.password
            }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(400);
        expect(body.message).toBe(
            "Bad request, email or password parameter is missing in POST request."
        );
    });

    test("@regression Login with missing password returns 400", async ({ request }) => {
        const response = await request.post(verifyLoginApiEndpoint, {
            form: {
                email: testUser.email
            }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(400);
        expect(body.message).toBe(
            "Bad request, email or password parameter is missing in POST request."
        );
    });

    test("@regression Login with invalid email and valid password returns 404", async ({ request }) => {
        const response = await request.post(verifyLoginApiEndpoint, {
            form: {
                email: "invalid@email.com",
                password: testUser.password
            }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(404);
        expect(body.message).toBe("User not found!");
    });

    test("@regression Login with valid email and invalid password returns 404", async ({ request }) => {
        const response = await request.post(verifyLoginApiEndpoint, {
            form: {
                email: testUser.email,
                password: "wrongpassword"
            }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(404);
        expect(body.message).toBe("User not found!");
    });

    test("@regression Login with both invalid email and password returns 404", async ({ request }) => {
        const response = await request.post(verifyLoginApiEndpoint, {
            form: {
                email: "invalidemail@test.com",
                password: "wrongpassword"
            }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(404);
        expect(body.message).toBe("User not found!");
    });

    test("@regression DELETE method returns 405", async ({ request }) => {
        const response = await request.delete(verifyLoginApiEndpoint);

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(405);
        expect(body.message).toBe("This request method is not supported.");
    });
});