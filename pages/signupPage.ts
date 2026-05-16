import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';
import { UserModel } from '../models/userModel';
import { config } from "../utils/config";
import { UiUrls } from '../utils/uiUrls';

export class SignupPage extends BasePage {
    private accountInfoForm: Locator;
    private accountInfoHeader: Locator;
    private mrRadioButton: Locator;
    private mrsRadioButton: Locator;

    private nameInput: Locator;
    private emailInput: Locator;
    private passwordInput: Locator;

    private daySelect: Locator;
    private monthSelect: Locator;
    private yearSelect: Locator;

    private newsletterCheckbox: Locator;
    private offersCheckbox: Locator;

    private addressInfoHeader: Locator;

    private firstNameInput: Locator;
    private lastNameInput: Locator;
    private companyInput: Locator;
    private addressInput: Locator;
    private address2Input: Locator;
    private countrySelect: Locator;
    private stateInput: Locator;
    private cityInput: Locator;
    private zipcodeInput: Locator;
    private mobileNumberInput: Locator;

    private createAccountButton: Locator;

    constructor(page: Page) {
        super(page);

        this.accountInfoForm = page.locator('.login-form');
        this.accountInfoHeader = this.accountInfoForm.getByRole('heading', { name: 'Enter Account Information' });
        this.addressInfoHeader = this.accountInfoForm.getByRole('heading', { name: 'Address Information' });
        this.mrRadioButton = this.accountInfoForm.getByLabel('Mr.');
        this.mrsRadioButton = this.accountInfoForm.getByLabel('Mrs.');

        // ACCOUNT INFO
        this.nameInput = this.accountInfoForm.locator('[data-qa="name"]');
        this.emailInput = this.accountInfoForm.getByLabel('Email');
        this.passwordInput = this.accountInfoForm.getByLabel('Password');

        this.daySelect = this.accountInfoForm.locator('#days');
        this.monthSelect = this.accountInfoForm.locator('#months');
        this.yearSelect = this.accountInfoForm.locator('#years');

        this.newsletterCheckbox = this.accountInfoForm.locator('#newsletter');
        this.offersCheckbox = this.accountInfoForm.locator('#optin');

        // ADDRESS INFO
        this.firstNameInput = this.accountInfoForm.locator('[data-qa="first_name"]');
        this.lastNameInput = this.accountInfoForm.locator('[data-qa="last_name"]');
        this.companyInput = this.accountInfoForm.locator('[data-qa="company"]');
        this.addressInput = this.accountInfoForm.locator('[data-qa="address"]');
        this.address2Input = this.accountInfoForm.locator('[data-qa="address2"]');
        this.countrySelect = this.accountInfoForm.locator('[data-qa="country"]');
        this.stateInput = this.accountInfoForm.locator('[data-qa="state"]');
        this.cityInput = this.accountInfoForm.locator('[data-qa="city"]');
        this.zipcodeInput = this.accountInfoForm.locator('[data-qa="zipcode"]');
        this.mobileNumberInput = this.accountInfoForm.locator('[data-qa="mobile_number"]');
        this.createAccountButton = this.accountInfoForm.getByRole('button', { name: 'Create Account' });
    }

    async createAccount(model: UserModel) {
        await this.selectTitle(model.title);
        await this.passwordInput.fill(model.password);
        await this.selectDateOfBirth(model.dayOfBirth, model.monthOfBirth, model.yearOfBirth);

        if (model.subscribeToNewsletter) {
            await this.newsletterCheckbox.check();
        }

        if (model.receiveSpecialOffers) {
            await this.offersCheckbox.check();
        }

        await this.firstNameInput.fill(model.firstName);
        await this.lastNameInput.fill(model.lastName);
        await this.companyInput.fill(model.company);
        await this.addressInput.fill(model.address);
        await this.address2Input.fill(model.address2);
        await this.selectCountry(model.country);
        await this.stateInput.fill(model.state);
        await this.cityInput.fill(model.city);
        await this.zipcodeInput.fill(model.zipcode);
        await this.mobileNumberInput.fill(model.mobileNumber);

        await this.createAccountButton.click();
    }

    async verifyIsAtSignupPage(name: string, email: string) {
        await expect(this.page).toHaveURL(config.baseUrl + UiUrls.signup);
        await expect(this.accountInfoHeader).toBeVisible();
        await expect(this.addressInfoHeader).toBeVisible();
        await expect(this.nameInput).toHaveValue(name);
        await expect(this.emailInput).toHaveValue(email);
    }

    private async selectTitle(title: string) {
        if (title === 'Mr.') {
            await this.mrRadioButton.check();
        } else {
            await this.mrsRadioButton.check();
        }
    }

    private async selectDateOfBirth(day: string, month: string, year: string) {
        await this.daySelect.selectOption(day);
        await this.monthSelect.selectOption(month);
        await this.yearSelect.selectOption(year);
    }

    private async selectCountry(country: string) {
        await this.countrySelect.selectOption(country);
    }
}