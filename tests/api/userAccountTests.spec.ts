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

test.describe('@api Update Account API - /updateAccount', () => {
    const updateAccountApiEndpoint = config.api.baseUrl + ApiUrls.updateAccount;
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

    test('@smoke User can update account successfully with valid data', async ({ request }) => {
        const updatedUser = { ...user, name: "Updated Name" };
        const formData = userApiHelper.createAccountFormData(updatedUser);
        const response = await request.put(updateAccountApiEndpoint, { form: formData });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(200);
        expect(body.message).toBe("User updated!");
    });

    test('@regression Updating account with invalid email format returns 404', async ({ request }) => {
        const updatedUser = { ...user, email: "invalidemail" };
        const formData = userApiHelper.createAccountFormData(updatedUser);
        const response = await request.put(updateAccountApiEndpoint, { form: formData });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(404);
        expect(body.message).toContain("not found");
    });

    test('@regression Updating account with missing email returns 400', async ({ request }) => {
        const formData = userApiHelper.createAccountFormData(user);
        delete formData.email; // Remove required field email
        const response = await request.put(updateAccountApiEndpoint, { form: formData });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(400);
        expect(body.message).toContain("Bad request");
    });

    // User is not deleted, so it is updated successfully and API returns 200 with "User updated!" message instead of 404.
    test.skip('@regression @issue Updating non-existing user returns 404', async ({ request }) => {
        const formData = userApiHelper.createAccountFormData(user);
        // First delete the user to ensure it does not exist
        await userApiHelper.deleteUser(user.email, user.password);
        await new Promise(r => setTimeout(r, 10000));
        // Then attempt to get user details to confirm deletion
        const getUserDetailApiEndpoint = config.api.baseUrl + ApiUrls.userDetailByEmail;
        const detail = await request.get(getUserDetailApiEndpoint, {
            params: { email: user.email }
        });
        const detailBody = await detail.json();
        console.log("User detail response after deletion:", detailBody);

        expect(detailBody.responseCode).toBe(404);

        // Then attempt to update the deleted user
        const response = await request.put(updateAccountApiEndpoint, { form: formData });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(404);
        expect(body.message).toContain("not found");
    });
});

test.describe('@api Get User Detail API - /getUserDetailByEmail', () => {
    const getUserDetailApiEndpoint = config.api.baseUrl + ApiUrls.userDetailByEmail;
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

    test('@smoke User can retrieve account details successfully with valid email', async ({ request }) => {
        const response = await request.get(getUserDetailApiEndpoint, {
            params: { email: user.email }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(200);
        expect(body.user.email).toBe(user.email);
    });

    test('@regression Retrieving account details for non-existent user returns 404', async ({ request }) => {
        const response = await request.get(getUserDetailApiEndpoint, {
            params: { email: "doesnotexist@test.com" }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(404);
        expect(body.message).toContain("not found");
    });

    test('@regression @issue Retrieving account details with invalid email format returns 200', async ({ request }) => {
        const response = await request.get(getUserDetailApiEndpoint, {
            params: { email: "invalid" }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(200);
        expect(body.user.email).toBe("invalid");

        for (const [key, value] of Object.entries(body.user)) {
            if (key === "id") continue; // skip id field as it is auto-generated and is number
            expect(value).toBe("invalid");
        }
        // API returns 200 with user details even for invalid email format
        // and all fields have the same value as the email. 
    });

    test('@regression Retrieving account details without parameters returns 400', async ({ request }) => {
        const response = await request.get(getUserDetailApiEndpoint);

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(400);
        expect(body.message).toContain("Bad request");
    });
});