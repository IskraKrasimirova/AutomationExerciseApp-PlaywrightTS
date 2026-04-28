import { test } from '../tests/setup';
import { config } from '../utils/config';
import { HomePage } from '../pages/homePage';
import { ProductsPage } from '../pages/productsPage';
import { ProductDetailsPage } from '../pages/productDetailsPage';

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

});


// [Test]
//         [Category("Smoke")]
//         [AllureFeature("Smoke")]
//         public async Task ViewProductDetails_ForTheFirstProduct_DisplaysCorrectDetails()
//         {
//             await _homePage.VerifyIsAtHomePage();
//             await _homePage.NavBar.GoToProductsPage();
//             await _productsPage.VerifyIsAtProductsPage();

//             var productName = await _productsPage.GetFirstProductName();
//             var productPrice = await _productsPage.GetFirstProductPrice();
//             var productImageSrc = await _productsPage.GetFirstProductImageSrc();

//             await _productsPage.ClickViewFirstProduct();
//             await _productDetailsPage.VerifyIsAtProductDetailsPage();
//             await _productDetailsPage.VerifyProductNameIs(productName);
//             await _productDetailsPage.VerifyProductPriceIs(productPrice);
//             await _productDetailsPage.VerifyProductImageIs(productImageSrc);
//         }