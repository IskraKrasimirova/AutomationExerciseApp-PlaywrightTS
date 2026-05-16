import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';
import { config } from "../utils/config";
import { UiUrls } from '../utils/uiUrls';

export class AccountDeletedPage extends BasePage {
    private accountDeletedHeader: Locator;
    private deletingMessage: Locator;
    private continueButton: Locator;

    constructor(page: Page) {
        super(page);

        this.accountDeletedHeader = page.getByRole('heading', { name: 'Account Deleted!' });
        this.deletingMessage = page.getByText('Your account has been permanently deleted!');
        this.continueButton = page.getByRole('link', { name: 'Continue' });
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async verifyAccountDeleted() {
        await expect(this.page).toHaveURL(config.baseUrl + UiUrls.accountDeleted);
        await expect(this.accountDeletedHeader).toBeVisible();
        await expect(this.deletingMessage).toBeVisible();
        await expect(this.continueButton).toBeVisible();
    }
}