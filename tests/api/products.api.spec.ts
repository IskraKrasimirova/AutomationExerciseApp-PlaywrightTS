import { test, expect } from '@playwright/test';
import { ApiClient } from '../../utils/api/apiClient';
import { ProductsApi } from '../../utils/api/productsApi';

test('GET /productsList returns all products', async ({ request }) => {
  const client = new ApiClient(request);
  const products = new ProductsApi(client);

  const response = await products.getAllProducts();
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toBeTruthy();
});

