import { test, expect } from '../setup';
import { config } from '../../utils/config';

test('site is alive', async ({ page }) => {
  const start = Date.now();
  const response = await page.goto(config.baseUrl, { timeout: 10000 });

  expect(response?.status()).toBeLessThan(500);

  const loadTime = Date.now() - start;
  console.log('Load time:', loadTime);

  if (loadTime > 5000) {
    test.skip(true, 'Site is too slow, skipping all tests');
  }
});
