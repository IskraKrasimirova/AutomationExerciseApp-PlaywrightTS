import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';
import { config } from "../utils/config";
import { UiUrls } from "../utils/uiUrls";

export class ProductDetailsPage extends BasePage {
    private productDetails: Locator;
    private productImage: Locator;
    private productName: Locator;
    private category: Locator;
    private price: Locator;
    private availability: Locator;
    private quantityLabel: Locator;
    private quantityInput: Locator;
    private condition: Locator;
    private brand: Locator;
    private addToCartButton: Locator;

    private writeYourReviewTab: Locator;
    private reviewForm: Locator;
    private reviewNameInput: Locator;
    private reviewEmailInput: Locator;
    private reviewTextInput: Locator;
    private submitReviewButton: Locator;

    constructor(page: Page) {
        super(page);

        this.productDetails = page.locator('.product-details');
        this.productImage = this.productDetails.locator('.view-product img');
        this.productName = this.productDetails.getByRole('heading');
        this.category = this.productDetails.locator('p:has-text("Category")');
        this.price = this.productDetails.locator('.product-information').locator('text=Rs.');
        this.availability = this.productDetails.locator('p:has-text("Availability")');
        this.quantityLabel = this.productDetails.locator('label:has-text("Quantity")');
        this.quantityInput = this.productDetails.locator('#quantity');
        this.condition = this.productDetails.locator('p:has-text("Condition")');
        this.brand = this.productDetails.locator('p:has-text("Brand")');
        this.addToCartButton = this.productDetails.getByRole('button', { name: 'Add to Cart' });
        // --- Review form ---
        this.writeYourReviewTab = page.getByRole('link', { name: 'Write Your Review' });
        this.reviewForm = page.locator('#review-form');
        this.reviewNameInput = this.reviewForm.locator('#name');
        this.reviewEmailInput = this.reviewForm.locator('#email');
        this.reviewTextInput = this.reviewForm.locator('#review');
        this.submitReviewButton = this.reviewForm.locator('#button-review');
    }

    async setQuantity(quantity: number): Promise<void> {
        await this.quantityInput.fill(quantity.toString());
    }

    async addToCart(): Promise<void> {
        await this.addToCartButton.click();
    }

    async verifyIsAtProductDetailsPage(): Promise<void> {
        await expect(this.page).toHaveURL(new RegExp(`${config.baseUrl}${UiUrls.productDetails}\\d+`));
        await this.verifyProductDetailsAreVisible();
        await this.verifyProductReviewFormIsVisible();
    }

    async verifyProductDetailsAreVisible(): Promise<void> {
        await expect(this.productImage).toBeVisible();
        await expect(this.productName).toBeVisible();
        await expect(this.category).toBeVisible();
        await expect(this.price).toBeVisible();
        await expect(this.availability).toBeVisible();
        await expect(this.quantityLabel).toBeVisible();
        await expect(this.quantityInput).toBeVisible();
        await expect(this.addToCartButton).toBeVisible();
        await expect(this.condition).toBeVisible();
        await expect(this.brand).toBeVisible();
    }

    async verifyProductReviewFormIsVisible(): Promise<void> {
        await expect(this.writeYourReviewTab).toBeVisible();
        await expect(this.reviewNameInput).toBeVisible();
        await expect(this.reviewEmailInput).toBeVisible();
        await expect(this.reviewTextInput).toBeVisible();
        await expect(this.submitReviewButton).toBeVisible();
    }

    async verifyProductNameIs(expected: string): Promise<void> {
        await expect(this.productName).toContainText(expected);
    }

    async verifyProductPriceIs(expected: string): Promise<void> {
        await expect(this.price).toContainText(expected);
    }

    async verifyProductImageIs(expectedSrc: string): Promise<void> {
        await expect(this.productImage).toHaveAttribute('src', expectedSrc);
    }
}
