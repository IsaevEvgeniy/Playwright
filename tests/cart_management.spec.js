import { expect, test } from '@playwright/test';
import CartPage from '../pageObjects/CartPage';
import InventoryPage from '../pageObjects/InventoryPage';
import LoginPage from '../pageObjects/LoginPage';
import { URLS } from '../support/constants';

test.describe('US_03 | Cart Management', () => {
  let inventoryPage;
  let loginPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);

    await loginPage.openWebsite();
    await loginPage.loginAs('STANDARD_USER');
  });

  test('TC_03.001.01 | Cart Management > Cart Icon > Verify cart badge count updates when adding items', async ({
    page,
  }) => {
    await inventoryPage.product.clickButtonAddToCart(0);
    await inventoryPage.product.clickButtonAddToCart(1);
    await cartPage.verifyItemsCount(2);
  });

  test('TC_03.002.01 | Cart Management > Cart Page > Verify items can be removed from cart page', async ({
    page,
  }) => {
    await inventoryPage.product.clickButtonAddToCart(2);
    await inventoryPage.product.clickButtonAddToCart(3);

    await cartPage.openCart();
    await cartPage.clearItems(1);
    await cartPage.verifyElementCount(1);
  });

  test('TC_03.003.01 | Cart Management > Continue Shopping > Verify Continue Shopping button functionality', async ({
    page,
  }) => {
    await inventoryPage.product.clickButtonAddToCart(0);
    await cartPage.openCart();
    await cartPage.clickContinueShoppingButton();
    expect(page).toHaveURL(URLS.INVENTORY);
    await cartPage.verifyItemsCount(1);
  });
});
