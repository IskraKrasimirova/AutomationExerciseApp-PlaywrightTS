import { expect } from '@playwright/test';

export function validateProduct(product: any) {
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
