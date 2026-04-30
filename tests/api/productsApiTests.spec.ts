import { test, expect } from '@playwright/test';
import { ApiUrls } from '../../utils/api/apiUrls';
import { config } from '../../utils/config';


test.describe('Products API - /productsList', () => {
  const productsApiEndpoint = config.api.baseUrl + ApiUrls.productsList;

  test('GET /productsList returns all products and each product has required fields', async ({ request }) => {
    const response = await request.get(productsApiEndpoint);

    expect(response.status()).toBe(200);

    const body = await response.json();
    const productsList = body.products;
    expect(productsList.length).toBeGreaterThan(0);

    for (const product of productsList) {
      expect(product.id).toBeGreaterThan(0);
      expect(product.name).toEqual(expect.any(String));
      expect(product.name.trim()).not.toHaveLength(0);

      expect(product.price).toEqual(expect.any(String));
      expect(product.price.trim()).not.toHaveLength(0);

      expect(product.brand).toEqual(expect.any(String));
      expect(product.brand.trim()).not.toHaveLength(0);

      expect(product.category).toBeDefined();
      expect(product.category.category).toEqual(expect.any(String));
      expect(product.category.category.trim()).not.toHaveLength(0);

      expect(product.category.usertype).toBeDefined();
      expect(product.category.usertype.usertype).toEqual(expect.any(String));
      expect(product.category.usertype.usertype.trim()).not.toHaveLength(0);
    }
  });

  test('POST /productsList returns 405 in response body', async ({ request }) => {
    const response = await request.post(productsApiEndpoint);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty('responseCode');
    expect(body).toHaveProperty('message');

    expect(body.responseCode).toBe(405);
    expect(body.message).toBe('This request method is not supported.');
  });
});