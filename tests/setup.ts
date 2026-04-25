import { test as base } from '@playwright/test';

export const test = base.extend({
    // You can define fixtures here that will be available in all your tests
    // For example, you could create a fixture for a logged-in user   
    page: async ({ page }, use) => {
        await page.route('**/*', route => {
            const url = route.request().url();
            if (
                url.includes('googlesyndication') ||
                url.includes('doubleclick') ||
                url.includes('adnxs') ||
                url.includes('amazon-adsystem')
            ) {
                return route.abort();
            }
            return route.continue();
        });

        await use(page);
    }
});