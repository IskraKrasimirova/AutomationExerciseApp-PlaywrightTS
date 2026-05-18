import { test as base, Page } from '@playwright/test';

import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { SignupPage } from '../pages/signupPage';
import { AccountCreatedPage } from '../pages/accountCreatedPage';
import { AccountDeletedPage } from '../pages/accountDeletedPage';
import { ProductsPage } from '../pages/productsPage';
import { ProductDetailsPage } from '../pages/productDetailsPage';

import { Pages } from '../context/pages';

export const test = base.extend<{
    pages: Pages;
    page: Page;
}, {}>({
    // GLOBAL PAGE FIXTURE (ad-block + cleanup)
    page: async ({ page }, use) => {
        await page.route('**/*', route => {
            const url = route.request().url();
            if (
                url.includes('googlesyndication') ||
                url.includes('doubleclick') ||
                url.includes('adnxs') ||
                url.includes('amazon-adsystem') ||
                url.includes('ads') ||
                url.includes('adservice') ||
                url.includes('doubleclick') ||
                url.includes('googlesyndication') ||
                url.includes('pagead') ||
                url.includes('taboola') ||
                url.includes('outbrain') ||
                url.includes('criteo') ||
                url.includes('pubmatic') ||
                url.includes('openx') ||
                url.includes('zedo')
            ) {
                return route.abort();
            }
            return route.continue();
        });

        await use(page);
        await page.close();
    },

    // PAGES CONTEXT FIXTURE
    pages: async ({ page }, use) => {
        const pages = new Pages(
            new HomePage(page),
            new LoginPage(page),
            new SignupPage(page),
            new AccountCreatedPage(page),
            new AccountDeletedPage(page),
            new ProductsPage(page),
            new ProductDetailsPage(page)
        );

        // await use(pages);
        await (use as unknown as (p: Pages) => Promise<void>)(pages);
    }
});

export const expect = test.expect;
