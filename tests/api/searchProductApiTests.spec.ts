import { test, expect } from '@playwright/test';
import { ApiUrls } from '../../utils/api/apiUrls';
import { config } from '../../utils/config';
import { validateProduct } from '../../utils/api/productValidator';

test.describe('@api @search Search Product API - /searchProduct', () => {
    const searchProductApiEndpoint = config.api.baseUrl + ApiUrls.searchProduct;
    const searchTerms = ['top', 'tshirt', 'jean'];

    for (const term of searchTerms) {
        test(`@smoke POST /searchProduct with searchTerm "${term}" returns matching products`, async ({ request }) => {
            const requestBody = { search_product: term };
            const response = await request.post(searchProductApiEndpoint, { form: requestBody });
            expect(response.status()).toBe(200);

            const body = await response.json();
            const searchedProducts = body.products;
            expect(body.responseCode).toBe(200);
            expect(searchedProducts.length).toBeGreaterThan(0);

            for (const product of searchedProducts) {
                const searchable = `${product.name} ${product.category.category}`.toLowerCase();
                expect(searchable).toContain(term);
                validateProduct(product);
            }
        });
    }

    test('@regression POST /searchProduct without searchTerm returns 400 error', async ({ request }) => {
        const response = await request.post(searchProductApiEndpoint, {
            form: {}
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body).toHaveProperty('responseCode');
        expect(body).toHaveProperty('message');

        expect(body.responseCode).toBe(400);
        expect(body.message).toBe('Bad request, search_product parameter is missing in POST request.');
    });

    test('@regression POST /searchProduct with non-existing search term returns empty product list', async ({ request }) => {
        const response = await request.post(searchProductApiEndpoint, {
            form: { search_product: 'notexistingproduct' }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();

        expect(body).toHaveProperty('responseCode');
        expect(body).toHaveProperty('products');

        expect(body.responseCode).toBe(200);
        expect(Array.isArray(body.products)).toBe(true);
        expect(body.products).toHaveLength(0);
    });

    test('@regression POST /searchProduct with empty search term returns all products', async ({ request }) => {
        const response = await request.post(searchProductApiEndpoint, {
            form: { search_product: '' }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(200);
        expect(body.products.length).toBeGreaterThan(0);

        for (const product of body.products) {
            validateProduct(product);
        }
    });

    const mixedCaseTerms = ['Top', 'TOP', 'tOp'];

    for (const term of mixedCaseTerms) {
        test(`@regression POST /searchProduct is case-insensitive for term "${term}"`, async ({ request }) => {
            const response = await request.post(searchProductApiEndpoint, {
                form: { search_product: term }
            });

            expect(response.status()).toBe(200);

            const body = await response.json();
            const searchedProducts = body.products;
            expect(body.responseCode).toBe(200);
            expect(searchedProducts.length).toBeGreaterThan(0);

            for (const product of searchedProducts) {
                const searchable = `${product.name} ${product.category.category}`.toLowerCase();
                expect(searchable).toContain(term.toLowerCase());
                validateProduct(product);
            }
        });
    }

    const spacedTerms = ['  top', '  jean', 'tshirt  '];

    for (const term of spacedTerms) {
        test(`@regression POST /searchProduct with whitespace for search term "${term}" returns empty list`, async ({ request }) => {
            const response = await request.post(searchProductApiEndpoint, {
                form: { search_product: term }
            });

            expect(response.status()).toBe(200);

            const body = await response.json();
            expect(body.responseCode).toBe(200);

            // API does NOT trim whitespace → expected empty result
            expect(body.products).toHaveLength(0);
        });
    }

    const invalidSymbols = ['@#?', '123', 'топ'];

    for (const term of invalidSymbols) {
        test(`@regression POST /searchProduct with invalid symbols "${term}" returns empty list`, async ({ request }) => {
            const response = await request.post(searchProductApiEndpoint, {
                form: { search_product: term }
            });

            expect(response.status()).toBe(200);

            const body = await response.json();
            expect(body.responseCode).toBe(200);
            expect(body.products).toHaveLength(0);
        });
    }
    // stress test to check if API can handle very long search terms without crashing
    test('@regression POST /searchProduct with very long search term returns empty list and does not crash', async ({ request }) => {
        const longSearchTerm = 'a'.repeat(500);
        const response = await request.post(searchProductApiEndpoint, {
            form: { search_product: longSearchTerm }
        });

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.responseCode).toBe(200);
        expect(body.products).toHaveLength(0);
    });
});