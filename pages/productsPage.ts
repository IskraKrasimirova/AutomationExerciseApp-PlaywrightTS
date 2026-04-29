import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { config } from "../utils/config";
import { UiUrls } from "../utils/uiUrls";

export class ProductsPage extends BasePage {
    private allProductsHeader: Locator;
    private productsList: Locator;
    private searchProductInput: Locator;
    private searchButton: Locator;
    private categoryHeader: Locator;
    private brandsHeader: Locator;
    private saleImage: Locator;
    private productItems: Locator;
    private searchedProductsHeader: Locator;

    constructor(page: Page) {
        super(page);

        this.allProductsHeader = page.getByRole('heading', { name: 'All Products' });
        this.productsList = page.locator('.features_items');
        this.searchProductInput = page.getByRole('textbox', { name: 'Search Product' });
        this.searchButton = page.locator('#submit_search');
        this.categoryHeader = page.getByRole('heading', { name: 'Category' });
        this.brandsHeader = page.getByRole('heading', { name: 'Brands' });
        this.saleImage = page.locator('#sale_image');
        this.productItems = page.locator('.product-image-wrapper');
        this.searchedProductsHeader = page.getByRole('heading', { name: 'Searched Products' });
    }

    productItem(index: number): Locator {
        return this.productItems.nth(index);
    }

    productInfo(index: number): Locator {
        return this.productItem(index).locator('.productinfo');
    }

    addToCartButtonOverlay(index: number): Locator {
        return this.productItem(index).locator('.product-overlay .add-to-cart');
    }

    productViewButton(index: number): Locator {
        return this.productItem(index).getByRole('link', { name: 'View Product' });
    }

    async getProductName(index: number): Promise<string> {
        return await this.productInfo(index).locator('p').innerText();
    }

    async getProductPrice(index: number): Promise<string> {
        return await this.productInfo(index).locator('h2').innerText();
    }

    async getProductImage(index: number): Promise<string> {
        const src = await this.productInfo(index).locator('img').getAttribute('src');

        if (!src) {
            throw new Error(`Image src is null for product at index ${index}`);
        }

        return src;
    }

    async clickViewProduct(index: number) {
        await this.productViewButton(index).click();
    }

    async hoverAndAddToCart(index: number) {
        await this.productItem(index).hover();
        await this.addToCartButtonOverlay(index).click();
    }

    async searchForProduct(productName: string) {
        await this.searchProductInput.fill(productName);
        await this.searchButton.click();
    }

    async verifyIsAtProductsPage() {
        await expect(this.page).toHaveURL(`${config.baseUrl}${UiUrls.products}`);
        await expect.soft(this.allProductsHeader).toBeVisible();
        await expect.soft(this.productsList).toBeVisible();
        await expect.soft(this.searchProductInput).toBeVisible();
        await expect.soft(this.searchButton).toBeVisible();
        await expect.soft(this.categoryHeader).toBeVisible();
        await expect.soft(this.brandsHeader).toBeVisible();
        await expect.soft(this.saleImage).toBeVisible();
    }

    async verifySearchResultsAreDisplayed(searchTerm: string) {
        const encodedSearchTerm = encodeURIComponent(searchTerm);

        await expect(this.page).toHaveURL(new RegExp(`${UiUrls.products}\\?search=${encodedSearchTerm}`));

        await expect(this.searchedProductsHeader).toBeVisible();
        await expect(this.productsList).toBeVisible();

        const count = await this.productItems.count();
        expect(count).toBeGreaterThan(0);

        // IMPORTANT:
        // DO NOT validate relevance by name, because search also matches category/brand,
        // which are NOT visible in the search results UI.
        // Therefore, the validation is limited to what the user sees.
    }
}
