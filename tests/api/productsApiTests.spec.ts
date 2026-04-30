import { test, expect } from '@playwright/test';
import { ApiUrls } from '../../utils/api/apiUrls';
import { config } from '../../utils/config';
import { validateProduct } from '../../utils/api/productValidator';


test.describe('@api @products Products API - /productsList', () => {
  const productsApiEndpoint = config.api.baseUrl + ApiUrls.productsList;

  test('@smoke GET /productsList returns all products and each product has required fields', async ({ request }) => {
    const response = await request.get(productsApiEndpoint);

    expect(response.status()).toBe(200);

    const body = await response.json();
    const productsList = body.products;
    expect(productsList.length).toBeGreaterThan(0);

    for (const product of productsList) {
      validateProduct(product);
    }
  });

  test('@regression POST /productsList returns 405 in response body', async ({ request }) => {
    const response = await request.post(productsApiEndpoint);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty('responseCode');
    expect(body).toHaveProperty('message');

    expect(body.responseCode).toBe(405);
    expect(body.message).toBe('This request method is not supported.');
  });
});