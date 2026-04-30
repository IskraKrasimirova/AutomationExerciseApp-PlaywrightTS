import { test, expect } from '@playwright/test';
import { ApiUrls } from '../../utils/api/apiUrls';
import { config } from '../../utils/config';

test.describe('Brands API - /brandsList', () => {
  const brandsApiEndpoint = config.api.baseUrl + ApiUrls.brandsList;

    test('GET /brandsList returns all brands and each brand has required fields', async ({ request }) => {
        const response = await request.get(brandsApiEndpoint);

        expect(response.status()).toBe(200); 
        
        const body = await response.json();
        const brandsList = body.brands;
        expect(brandsList.length).toBeGreaterThan(0);

        for (const brand of brandsList) {
            expect(brand.id).toBeGreaterThan(0);
            expect(brand.brand).toEqual(expect.any(String));
            expect(brand.brand.trim()).not.toHaveLength(0);
        }
    });

    test('PUT /brandsList returns 405 in response body', async ({ request }) => {
        const response = await request.put(brandsApiEndpoint);
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body).toHaveProperty('responseCode');
        expect(body).toHaveProperty('message');
        expect(body.responseCode).toBe(405);
        expect(body.message).toBe('This request method is not supported.');
    });
});