import { test } from '../tests/setup';
import { config } from '../utils/config';
import { HomePage } from '../pages/homePage';
import { ProductsPage } from '../pages/productsPage';
import { ProductDetailsPage } from '../pages/productDetailsPage';
import { ProductData } from '../models/productData';


test.describe('Product details tests @product', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(config.baseUrl);
    });

    test('View product details for the first product displays correct details @smoke', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.verifyIsAtHomePage();
        await homePage.navBar.goToProductsPage();
        const productsPage = new ProductsPage(page);
        await productsPage.verifyIsAtProductsPage();

        const firstProductName = await productsPage.getProductName(0);
        const firstProductPrice = await productsPage.getProductPrice(0);
        const firstProductImageSrc = await productsPage.getProductImage(0);
        // click on the first product's view button
        await productsPage.clickViewProduct(0);

        const productDetailsPage = new ProductDetailsPage(page);
        await productDetailsPage.verifyIsAtProductDetailsPage();
        await productDetailsPage.verifyProductNameIs(firstProductName);
        await productDetailsPage.verifyProductPriceIs(firstProductPrice);
        await productDetailsPage.verifyProductImageIs(firstProductImageSrc);
    });

    test('Search for a product and verify results @smoke', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.verifyIsAtHomePage();
        await homePage.navBar.goToProductsPage();
        const productsPage = new ProductsPage(page);
        await productsPage.verifyIsAtProductsPage();

        const productToSearch = ProductData.getRandomProduct();
        await productsPage.searchForProduct(productToSearch);
        await productsPage.verifySearchResultsAreDisplayed(productToSearch);

    });
});