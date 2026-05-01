import { UserModel } from "../models/userModel";
import { ApiUserModel } from "../models/apiUserModel";
//import { faker } from "@faker-js/faker";
const { faker } = require("@faker-js/faker");


const titles = ['Mr.', 'Mrs.'];
const countries = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore'];

export class UserFactory {
    static createDefault(): UserModel {
        const birthDate = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });

        return {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            title: faker.helpers.arrayElement(titles),
            dayOfBirth: birthDate.getDate().toString(),
            monthOfBirth: birthDate.toLocaleString('en-US', { month: 'long' }),
            yearOfBirth: birthDate.getFullYear().toString(),
            country: faker.helpers.arrayElement(countries),
            subscribeToNewsletter: true,
            receiveSpecialOffers: true,
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            company: faker.company.name(),
            address: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            mobileNumber: faker.phone.number()
        };
    }

    static createApiUser(): ApiUserModel {
        const birthDate = faker.date.birthdate({ min: 18, max: 60, mode: 'age' });

        return {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            title: faker.helpers.arrayElement(titles),
            dayOfBirth: birthDate.getDate().toString(),
            monthOfBirth: (birthDate.getMonth() + 1).toString().padStart(2, "0"),
            yearOfBirth: birthDate.getFullYear().toString(),
            country: faker.helpers.arrayElement(countries),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            company: faker.company.name(),
            address: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            mobileNumber: faker.phone.number()
        };
    }
}