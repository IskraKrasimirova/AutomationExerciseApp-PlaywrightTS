import { test } from '../setup';
import { ProductData } from '../../models/productData';


test.describe('Product details tests @ui @products', () => {

    test.beforeEach(async ({ pages }) => {
        test.info().annotations.push({ type: "tag", description: "ui" });
        test.info().annotations.push({ type: "tag", description: "products" });
        
        await pages.homePage.open();
    });

    test('View product details for the first product displays correct details @smoke', async ({ pages }) => {
        test.info().annotations.push({ type: "tag", description: "smoke" });

        const {
            homePage,
            productsPage,
            productDetailsPage
        } = pages;

        await homePage.verifyIsAtHomePage();
        await homePage.navBar.goToProductsPage();
        await productsPage.verifyIsAtProductsPage();

        const firstProductName = await productsPage.getProductName(0);
        const firstProductPrice = await productsPage.getProductPrice(0);
        const firstProductImageSrc = await productsPage.getProductImage(0);
        // click on the first product's view button
        await productsPage.clickViewProduct(0);

        await productDetailsPage.verifyIsAtProductDetailsPage();
        await productDetailsPage.verifyProductNameIs(firstProductName);
        await productDetailsPage.verifyProductPriceIs(firstProductPrice);
        await productDetailsPage.verifyProductImageIs(firstProductImageSrc);
    });

    test('Search for a product and verify results @smoke', async ({ pages }) => {
        test.info().annotations.push({ type: "tag", description: "smoke" });

        const {
            homePage,
            productsPage
        } = pages;

        await homePage.verifyIsAtHomePage();
        await homePage.navBar.goToProductsPage();
        await productsPage.verifyIsAtProductsPage();

        const productToSearch = ProductData.getRandomProduct();
        await productsPage.searchForProduct(productToSearch);
        await productsPage.verifySearchResultsAreDisplayed(productToSearch);
    });
});