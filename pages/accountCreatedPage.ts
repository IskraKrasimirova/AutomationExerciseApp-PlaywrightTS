import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';
import {config} from "../utils/config";
import { UiUrls } from '../utils/uiUrls';

export class AccountCreatedPage extends BasePage {
    private accountCreatedHeader: Locator;
    private greetingMessage: Locator;
    private continueButton: Locator;

    constructor(page: Page) {
        super(page);

        this.accountCreatedHeader = page.getByRole('heading', { name: 'Account Created!' });
        this.greetingMessage = page.getByText('Congratulations! Your new account has been successfully created!');
        this.continueButton = page.locator('[data-qa="continue-button"]');
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async verifyAccountCreated() {
        await expect(this.page).toHaveURL(config.baseUrl + UiUrls.accountCreated);
        await expect(this.accountCreatedHeader).toBeVisible();
        await expect(this.greetingMessage).toBeVisible();
        await expect(this.continueButton).toBeVisible();
    }
}