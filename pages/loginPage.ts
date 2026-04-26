import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    private loginForm: Locator;
    private loginHeader;
    private emailInput: Locator;
    private passwordInput: Locator;
    private loginButton;

    private signupForm: Locator;
    private signupHeader: Locator;
    private nameInput: Locator;
    private signupEmailInput: Locator;
    private signupButton: Locator;

    private existingEmailErrorMessage: Locator;
    private invalidCredentialsErrorMessage: Locator;

    constructor(page: Page) {
        super(page);

        // LOGIN FORM
        this.loginForm = page.locator('.login-form');
        this.loginHeader = this.loginForm.getByRole('heading', { name: 'Login to your account' });
        this.emailInput = this.loginForm.getByRole('textbox', { name: 'Email Address' });
        this.passwordInput = this.loginForm.getByRole('textbox', { name: 'Password' });
        this.loginButton = this.loginForm.getByRole('button', { name: 'Login' });

        // SIGNUP FORM
        this.signupForm = page.locator('.signup-form');
        this.signupHeader = this.signupForm.getByRole('heading', { name: 'New User Signup!' });
        this.nameInput = this.signupForm.getByRole('textbox', { name: 'Name' });
        this.signupEmailInput = this.signupForm.getByRole('textbox', { name: 'Email Address' });
        this.signupButton = this.signupForm.getByRole('button', { name: 'Signup' });

        // ERRORS
        this.existingEmailErrorMessage = this.signupForm.getByText('Email Address already exist!');
        this.invalidCredentialsErrorMessage = this.loginForm.getByText('Your email or password is incorrect!');
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async signup(name: string, email: string) {
        await this.nameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupButton.click();
    }

    async verifyIsAtLoginPage() {
        await expect(this.page).toHaveURL('/login');
        await expect(this.loginHeader).toBeVisible();
        await expect(this.signupHeader).toBeVisible();
    }

    async verifyEmailAlreadyExistsError() {
        await expect(this.existingEmailErrorMessage).toBeVisible();
    }

    async verifyInvalidCredentialsError() {
        await expect(this.invalidCredentialsErrorMessage).toBeVisible();
    }
}