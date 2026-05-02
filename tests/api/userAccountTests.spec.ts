import { test, expect } from "@playwright/test";
import { config } from "../../utils/config";
import { ApiUrls } from "../../utils/api/apiUrls";
import { ApiUserModel } from "../../models/apiUserModel";
import { UserApiHelper } from "./helpers/userApiHelper";
import { UserFactory } from "../../factories/userFactory";

test.describe('@api @deleteAccount Delete Account API - /deleteAccount', () => {
    const deleteAccountApiEndpoint = config.api.baseUrl + ApiUrls.deleteAccount;
    let userApiHelper: UserApiHelper;
    let user: ApiUserModel;

    test.beforeEach(async ({ request }) => {
        userApiHelper = new UserApiHelper(request);
        user = UserFactory.createApiUser();

        const formData = userApiHelper.createAccountFormData(user);
        const response = await request.post(config.api.baseUrl + ApiUrls.createAccount, { form: formData });
        expect(response.status()).toBe(200);
    });

    test.afterEach(async () => {
        await userApiHelper.deleteUser(user.email, user.password);
    });

    test('@smoke User can delete account successfully with valid credentials', async ({ request }) => {
        const response = await request.delete(deleteAccountApiEndpoint, {
            form: {
                email: user.email,
                password: user.password
            }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(200);
        expect(body.message).toBe("Account deleted!");
    });

    test('@regression Deleting account with invalid credentials returns 404', async ({ request }) => {
        const response = await request.delete(deleteAccountApiEndpoint, {
            form: {
                email: user.email,
                password: "wrongpassword"
            }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(404);
        expect(body.message).toContain("not found");
    });

    test('@regression Deleting non-existing user returns 404', async ({ request }) => {
        // Delete once
        await request.delete(deleteAccountApiEndpoint, {
            form: { email: user.email, password: user.password }
        });

        // Delete again → user no longer exists
        const response = await request.delete(deleteAccountApiEndpoint, {
            form: { email: user.email, password: user.password }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(404);
        expect(body.message).toContain("not found");
    });
});