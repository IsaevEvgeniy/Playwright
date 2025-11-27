import { expect, test } from '@playwright/test';
import Filter from '../pageObjects/Filter';
import InventoryPage from '../pageObjects/InventoryPage';
import LoginPage from '../pageObjects/LoginPage';

test.describe('US_02 | Product Sorting', () => {
  let inventoryPage;
  let loginPage;
  let filter;

  test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    loginPage = new LoginPage(page);
    filter = new Filter(page);

    await loginPage.openWebsite();
    await loginPage.loginAs('STANDARD_USER');
  });

  test('TC_02.001.01 | Product Management > Sorting > Verify Price Ascending Sorting', async ({
    page,
  }) => {
    await filter.priceAscending();
    const products = await inventoryPage.product.getPrices();
    const actualPrices = [...products.map((p) => p.price)].sort((a, b) => a - b);
    expect(products.map((p) => p.price)).toEqual(actualPrices);
    await page.waitForLoadState('domcontentloaded');
  });

  test('TC_02.002.01 | Product Management > Sorting > Verify Price Descending Sorting', async ({
    page,
  }) => {
    await filter.priceDescending();
    const products = await inventoryPage.product.getPrices();
    const actualPrices = [...products.map((p) => p.price)].sort((a, b) => b - a);
    expect(products.map((p) => p.price)).toEqual(actualPrices);
    await page.waitForLoadState('domcontentloaded');
  });

  test('TC_02.003.01 | Product Management > Sorting > Verify Name Ascending Sorting', async ({
    page,
  }) => {
    await filter.nameAscending();
    const names = await inventoryPage.product.getName();
    const actualNames = [...names.map((n) => n.name)].sort((a, b) => a.localeCompare(b));
    expect(names.map((n) => n.name)).toEqual(actualNames);
    await page.waitForLoadState('domcontentloaded');
  });

  test('TC_02.004.01 | Product Management > Sorting > Verify Name Descending Sorting', async ({
    page,
  }) => {
    await filter.nameDescending();
    const names = await inventoryPage.product.getName();
    const actualNames = [...names.map((n) => n.name)].sort((a, b) => b.localeCompare(a));
    expect(names.map((n) => n.name)).toEqual(actualNames);
    await page.waitForLoadState('domcontentloaded');
  });
});
