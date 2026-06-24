import { APIRequestContext } from "@playwright/test";
import { config } from "../../../utils/config";
import { ApiUrls } from "../../../utils/api/apiUrls";
import { ApiUserModel } from "../../../models/apiUserModel";
import { UserFactory } from "../../../factories/userFactory";

export class UserApiHelper {
    constructor(private request: APIRequestContext) { }

    async createUser(): Promise<ApiUserModel> {
        const createAccountApiEndpoint = config.api.baseUrl + ApiUrls.createAccount;
        const user = UserFactory.createApiUser();

        const response = await this.request.post(createAccountApiEndpoint, {
            form: {
                name: user.name,
                email: user.email,
                password: user.password,
                title: user.title,
                birth_date: user.dayOfBirth,
                birth_month: user.monthOfBirth,
                birth_year: user.yearOfBirth,
                firstname: user.firstName,
                lastname: user.lastName,
                company: user.company,
                address1: user.address,
                address2: user.address2,
                country: user.country,
                state: user.state,
                city: user.city,
                zipcode: user.zipcode,
                mobile_number: user.mobileNumber
            }
        });

        // JSON parse guard
        let data;
        try {
            data = await response.json();
        } catch {
            const raw = await response.text();
            throw new Error(`API returned non-JSON response: ${raw}`);
        }

        if (data.responseCode !== 201) {
            throw new Error(`Failed to create user. ResponseCode: ${data.responseCode}, Message: ${data.message}`);
        }

        return user;
    }

    async deleteUser(email: string, password: string): Promise<void> {
        const deleteAccountApiEndpoint = config.api.baseUrl + ApiUrls.deleteAccount;
        const response = await this.request.delete(deleteAccountApiEndpoint, {
            form: { email, password }
        });

        // JSON parse guard
        let data;
        try {
            data = await response.json();
        } catch {
            const raw = await response.text();
            throw new Error(`API returned non-JSON response: ${raw}`);
        }

        if (data.responseCode !== 200) {
            console.warn(
                `[WARN] DeleteUser failed. ResponseCode: ${data.responseCode}, Message: ${data.message}`
            );
        }
    }

    createAccountFormData(user: ApiUserModel): Record<string, any> {
        return {
            name: user.name,
            email: user.email,
            password: user.password,
            title: user.title,
            birth_date: user.dayOfBirth,
            birth_month: user.monthOfBirth,
            birth_year: user.yearOfBirth,
            firstname: user.firstName,
            lastname: user.lastName,
            company: user.company,
            address1: user.address,
            address2: user.address2,
            country: user.country,
            state: user.state,
            city: user.city,
            zipcode: user.zipcode,
            mobile_number: user.mobileNumber
        };
    }

    async getUserDetailByEmail(email: string): Promise<ApiUserModel> {
        const getUserDetailApiEndpoint = config.api.baseUrl + ApiUrls.userDetailByEmail;

        const response = await this.request.get(getUserDetailApiEndpoint, {
            params: { email }
        });

        const data = await response.json();

        if (data.responseCode !== 200) {
            throw new Error(
                `Failed to get user details. ResponseCode: ${data.responseCode}, Message: ${data.message}`
            );
        }

        const apiUserData = data.user;

        return {
            name: apiUserData.name,
            email: apiUserData.email,
            password: "",
            title: apiUserData.title,
            // Birth date fields (snake_case → camelCase)
            dayOfBirth: apiUserData.birth_date,
            monthOfBirth: apiUserData.birth_month,
            yearOfBirth: apiUserData.birth_year,
            // Personal info
            firstName: apiUserData.first_name,
            lastName: apiUserData.last_name,
            // Company & address
            company: apiUserData.company,
            address: apiUserData.address1,
            address2: apiUserData.address2,
            country: apiUserData.country,
            state: apiUserData.state,
            city: apiUserData.city,
            zipcode: apiUserData.zipcode,
            mobileNumber: apiUserData.mobile_number
        };
    }

    async tryGetUserDetail(email: string): Promise<any> {
        const endpoint = config.api.baseUrl + ApiUrls.userDetailByEmail;

        const response = await this.request.get(endpoint, {
            params: { email }
        });

        return await response.json(); // returns 200 with user data if found, or 404 with error message if not found
    }
}
