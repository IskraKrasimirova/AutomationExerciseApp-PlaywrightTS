# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/loginTests.spec.ts >> Login tests @ui @login >> User cannot login with wrong password @regression
- Location: tests/ui/loginTests.spec.ts:60:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Account Deleted!' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('heading', { name: 'Account Deleted!' })

```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | import { BasePage } from './basePage';
  3  | import { config } from "../utils/config";
  4  | import { UiUrls } from '../utils/uiUrls';
  5  | 
  6  | export class AccountDeletedPage extends BasePage {
  7  |     private accountDeletedHeader: Locator;
  8  |     private deletingMessage: Locator;
  9  |     private continueButton: Locator;
  10 | 
  11 |     constructor(page: Page) {
  12 |         super(page);
  13 | 
  14 |         this.accountDeletedHeader = page.getByRole('heading', { name: 'Account Deleted!' });
  15 |         this.deletingMessage = page.getByText('Your account has been permanently deleted!');
  16 |         this.continueButton = page.getByRole('link', { name: 'Continue' });
  17 |     }
  18 | 
  19 |     async clickContinue() {
  20 |         await this.continueButton.click();
  21 |     }
  22 | 
  23 |     async verifyAccountDeleted() {
  24 |         await expect(this.page).toHaveURL(config.baseUrl + UiUrls.accountDeleted);
> 25 |         await expect(this.accountDeletedHeader).toBeVisible();
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  26 |         await expect(this.deletingMessage).toBeVisible();
  27 |         await expect(this.continueButton).toBeVisible();
  28 |     }
  29 | }
```