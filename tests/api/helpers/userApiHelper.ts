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

        const data = await response.json();

        if (data.responseCode !== 201) {
            throw new Error(`Failed to create user. ResponseCode: ${data.responseCode}, Message: ${data.message}`);
        }

        return user;
    }

    async deleteUser(email: string, password: string): Promise<void> {
        const deleteAccountApiEndpoint = config.api.baseUrl + ApiUrls.deleteAccount;
        const response = await this.request.post(deleteAccountApiEndpoint, {
            form: {
                _method: "DELETE",
                email,
                password
            }
        });

        const data = await response.json();

        if (data.responseCode !== 200) {
            console.warn(
                `[WARN] DeleteUser failed (known API issue). ResponseCode: ${data.responseCode}, Message: ${data.message}`
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
}
