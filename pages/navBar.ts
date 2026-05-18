import { expect, Locator, Page } from '@playwright/test';

export class NavBar {
    private homeLink: Locator;
    private productsLink: Locator;
    private cartLink: Locator;
    private loginLink: Locator;
    private testCasesLink: Locator;
    private apiTestingLink: Locator;
    private contactUsLink: Locator;
    private logoutLink: Locator;
    private deleteAccountLink: Locator;
    private loggedInAs: Locator;

    constructor(private page: Page) {
        this.homeLink = this.page.getByRole('link', { name: 'Home' });
        this.productsLink = this.page.getByRole('link', { name: 'Products' });
        this.cartLink = page.getByRole('link', { name: 'Cart' });
        this.loginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.testCasesLink = page.getByRole('link', { name: 'Test Cases' });
        this.apiTestingLink = page.getByRole('link', { name: 'API Testing' });
        this.contactUsLink = page.getByRole('link', { name: 'Contact us' });
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.deleteAccountLink = page.getByRole('link', { name: 'Delete Account' });
        this.loggedInAs = page.getByText('Logged in as');
    }

    async goToLoginPage() {
        await this.loginLink.waitFor({ state: 'visible' });
        await this.loginLink.click();
    }

    async deleteAccount() {
        await this.deleteAccountLink.click();
    }

    async goToProductsPage() {
        await this.productsLink.click();
    }

    async isUserLoggedIn(): Promise<boolean> {
        return this.logoutLink.isVisible();
    }

    async logout() {
        await this.logoutLink.click();
    }

    async verifyUserIsLoggedIn(name: string) {
        await expect(this.logoutLink).toBeVisible();
        await expect(this.deleteAccountLink).toBeVisible();
        await expect(this.loggedInAs).toContainText(name);
    }
}