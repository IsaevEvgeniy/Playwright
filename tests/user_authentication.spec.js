import { expect, test } from '@playwright/test';
import InventoryPage from '../pageObjects/InventoryPage';
import LoginPage from '../pageObjects/LoginPage';
import Menu from '../pageObjects/Menu';

import { ERROR_MESSAGES, URLS } from '../support/constants';

test.describe('US_01 | User Authentication', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test('TC_01.001.01 | User Management > Login > Verify Successful Standard User Login', async ({
    page,
  }) => {
    const inventoryPage = new InventoryPage(page);
    const menu = new Menu(page);

    await loginPage.openWebsite();
    await expect(page).toHaveURL(URLS.LOGIN);
    await loginPage.loginAs('STANDARD_USER');
    await expect(page).toHaveURL(URLS.INVENTORY);
    await expect(inventoryPage.header.title).toHaveText('Products');
    await menu.logoutUser();
  });

  test('TC_01.002.01 | User Management > Login > Verify Empty User Name Validation', async ({
    page,
  }) => {
    await loginPage.openWebsite();
    await loginPage.loginAs('PERFORMANCE_GLITCH_USER');
    await loginPage.verifyErrorMessage(ERROR_MESSAGES.USER_NAME_REQUIRED);
  });

  test('TC_01.003.01 | User Management > Login > Verify Empty Password Validation', async ({
    page,
  }) => {
    await loginPage.openWebsite();
    await loginPage.loginAs('PROBLEM_USER');
    await loginPage.verifyErrorMessage(ERROR_MESSAGES.PASSWORD_REQUIRED);
  });

  test('TC_01.004.01 | User Management > Login > Verify Invalid Credentials Validation', async ({
    page,
  }) => {
    await loginPage.openWebsite();
    await loginPage.loginAs('ERROR_USER');
    await loginPage.verifyErrorMessage(ERROR_MESSAGES.USER_NAME_PASSWORD_MISMATCH);
  });
});
