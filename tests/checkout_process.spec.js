import { expect, test } from '@playwright/test';
import CartPage from '../pageObjects/CartPage';
import InventoryPage from '../pageObjects/InventoryPage';
import Login from '../pageObjects/LoginPage';
import { ERROR_MESSAGES, URLS } from '../support/constants';

test.describe('US_05 | Checkout Process', () => {
  let loginPage;
  let inventoryPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new Login(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);

    await loginPage.openWebsite();
    await expect(page).toHaveURL(URLS.LOGIN);
    await loginPage.loginAs('STANDARD_USER');
    await expect(page).toHaveURL(URLS.INVENTORY);
    await cartPage.openCart();
    await expect(page).toHaveURL(URLS.CART);
    await cartPage.clickContinueShoppingButton();
    await inventoryPage.product.clickButtonAddToCart(1);
    await inventoryPage.product.clickButtonAddToCart(2);
    const itemsCount = await cartPage.getItemsCount();
    await expect(itemsCount).toBe(2);
    await cartPage.openCart();
    await cartPage.clickCheckoutButton();
    await expect(page).toHaveURL(URLS.CHECKOUT_STEP_ONE);
  });

  test('TC_05.001.01 | Checkout Process > Standard User > Verify successful checkout completion', async ({
    page,
  }) => {
    await cartPage.fillingInOrderInformation('STANDARD_USER');
    await expect(page).toHaveURL(URLS.CHECKOUT_STEP_TWO);
    await cartPage.clickFinishButton();
    await expect(page).toHaveURL(URLS.CHECKOUT_COMPLETE);
    await cartPage.verifyElement();
    await cartPage.clickBackHomeButton();
    await expect(page).toHaveURL(URLS.INVENTORY);
  });
  test('TC_05.002.01 | Checkout Process > Validation > Verify first name field validation error', async ({
    page,
  }) => {
    await cartPage.fillingInOrderInformation('LOCKED_OUT_USER');
    await cartPage.clickContinueButton();
    await cartPage.verifyErrorMessages(ERROR_MESSAGES.FIRST_NAME);
    await expect(page).toHaveURL(URLS.CHECKOUT_STEP_ONE);
  });

  test('TC_05.003.01 | Checkout Process > Validation > Verify last name field validation error', async ({
    page,
  }) => {
    await cartPage.fillingInOrderInformation('PROBLEM_USER');
    await cartPage.clickContinueButton();
    await cartPage.verifyErrorMessages(ERROR_MESSAGES.LAST_NAME);
    await expect(page).toHaveURL(URLS.CHECKOUT_STEP_ONE);
  });

  test('TC_05.004.01 | Checkout Process > Validation > Verify postal code field validation error', async ({
    page,
  }) => {
    await cartPage.fillingInOrderInformation('ERROR_USER');
    await cartPage.clickContinueButton();
    await cartPage.verifyErrorMessages(ERROR_MESSAGES.POSTAL_CODE);
    await expect(page).toHaveURL(URLS.CHECKOUT_STEP_ONE);
  });
});
