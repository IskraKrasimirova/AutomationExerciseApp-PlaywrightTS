# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/productTests.spec.ts >> Product details tests @ui @products >> View product details for the first product displays correct details @smoke
- Location: tests/ui/productTests.spec.ts:14:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'All Products' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 10000ms
  - waiting for getByRole('heading', { name: 'All Products' })

```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.features_items')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 10000ms
  - waiting for locator('.features_items')

```

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('textbox', { name: 'Search Product' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "soft toBeVisible" with timeout 10000ms
  - waiting for getByRole('textbox', { name: 'Search Product' })

```

```
Error: expect.soft .toBeVisible: Target page, context or browser has been closed
```

```
Error: expect.soft .toBeVisible: Target page, context or browser has been closed
```

```
Error: expect.soft .toBeVisible: Target page, context or browser has been closed
```

```
Error: expect.soft .toBeVisible: Target page, context or browser has been closed
```

```
Error: locator.innerText: Target page, context or browser has been closed
```

# Test source

```ts
  1   | import { expect, Locator, Page } from "@playwright/test";
  2   | import { BasePage } from "./basePage";
  3   | import { config } from "../utils/config";
  4   | import { UiUrls } from "../utils/uiUrls";
  5   | 
  6   | export class ProductsPage extends BasePage {
  7   |     private allProductsHeader: Locator;
  8   |     private productsList: Locator;
  9   |     private searchProductInput: Locator;
  10  |     private searchButton: Locator;
  11  |     private categoryHeader: Locator;
  12  |     private brandsHeader: Locator;
  13  |     private saleImage: Locator;
  14  |     private productItems: Locator;
  15  |     private searchedProductsHeader: Locator;
  16  | 
  17  |     constructor(page: Page) {
  18  |         super(page);
  19  | 
  20  |         this.allProductsHeader = page.getByRole('heading', { name: 'All Products' });
  21  |         this.productsList = page.locator('.features_items');
  22  |         this.searchProductInput = page.getByRole('textbox', { name: 'Search Product' });
  23  |         this.searchButton = page.locator('#submit_search');
  24  |         this.categoryHeader = page.getByRole('heading', { name: 'Category' });
  25  |         this.brandsHeader = page.getByRole('heading', { name: 'Brands' });
  26  |         this.saleImage = page.locator('#sale_image');
  27  |         this.productItems = page.locator('.product-image-wrapper');
  28  |         this.searchedProductsHeader = page.getByRole('heading', { name: 'Searched Products' });
  29  |     }
  30  | 
  31  |     productItem(index: number): Locator {
  32  |         return this.productItems.nth(index);
  33  |     }
  34  | 
  35  |     productInfo(index: number): Locator {
  36  |         return this.productItem(index).locator('.productinfo');
  37  |     }
  38  | 
  39  |     addToCartButtonOverlay(index: number): Locator {
  40  |         return this.productItem(index).locator('.product-overlay .add-to-cart');
  41  |     }
  42  | 
  43  |     productViewButton(index: number): Locator {
  44  |         return this.productItem(index).getByRole('link', { name: 'View Product' });
  45  |     }
  46  | 
  47  |     async getProductName(index: number): Promise<string> {
> 48  |         return await this.productInfo(index).locator('p').innerText();
      |                                                           ^ Error: locator.innerText: Target page, context or browser has been closed
  49  |     }
  50  | 
  51  |     async getProductPrice(index: number): Promise<string> {
  52  |         return await this.productInfo(index).locator('h2').innerText();
  53  |     }
  54  | 
  55  |     async getProductImage(index: number): Promise<string> {
  56  |         const src = await this.productInfo(index).locator('img').getAttribute('src');
  57  | 
  58  |         if (!src) {
  59  |             throw new Error(`Image src is null for product at index ${index}`);
  60  |         }
  61  | 
  62  |         return src;
  63  |     }
  64  | 
  65  |     async clickViewProduct(index: number) {
  66  |         await this.productViewButton(index).click();
  67  |     }
  68  | 
  69  |     async hoverAndAddToCart(index: number) {
  70  |         await this.productItem(index).hover();
  71  |         await this.addToCartButtonOverlay(index).click();
  72  |     }
  73  | 
  74  |     async searchForProduct(productName: string) {
  75  |         await this.searchProductInput.fill(productName);
  76  |         await this.searchButton.click();
  77  |     }
  78  | 
  79  |     async verifyIsAtProductsPage() {
  80  |         await expect(this.page).toHaveURL(`${config.baseUrl}${UiUrls.products}`);
  81  |         await expect.soft(this.allProductsHeader).toBeVisible();
  82  |         await expect.soft(this.productsList).toBeVisible();
  83  |         await expect.soft(this.searchProductInput).toBeVisible();
  84  |         await expect.soft(this.searchButton).toBeVisible();
  85  |         await expect.soft(this.categoryHeader).toBeVisible();
  86  |         await expect.soft(this.brandsHeader).toBeVisible();
  87  |         await expect.soft(this.saleImage).toBeVisible();
  88  |     }
  89  | 
  90  |     async verifySearchResultsAreDisplayed(searchTerm: string) {
  91  |         const encodedSearchTerm = encodeURIComponent(searchTerm);
  92  | 
  93  |         await expect(this.page).toHaveURL(new RegExp(`${UiUrls.products}\\?search=${encodedSearchTerm}`));
  94  | 
  95  |         await expect(this.searchedProductsHeader).toBeVisible();
  96  |         await expect(this.productsList).toBeVisible();
  97  | 
  98  |         const count = await this.productItems.count();
  99  |         expect(count).toBeGreaterThan(0);
  100 | 
  101 |         // IMPORTANT:
  102 |         // DO NOT validate relevance by name, because search also matches category/brand,
  103 |         // which are NOT visible in the search results UI.
  104 |         // Therefore, the validation is limited to what the user sees.
  105 |     }
  106 | }
  107 | 
```