import { expect, test } from '@playwright/test';
import Footer from '../pageObjects/Footer';
import LoginPage from '../pageObjects/LoginPage';
import { URLS } from '../support/constants';

test.describe('US_04 | Social Media Links', () => {
  let loginPage;
  let footer;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    footer = new Footer(page);

    await loginPage.openWebsite();
    await loginPage.loginAs('STANDARD_USER');
  });

  test('TC_04.001.01 | Social Media > Twitter > Verify Twitter link opens in new tab with correct URL', async ({
    context,
  }) => {
    const pagePromise = context.waitForEvent('page');
    await footer.clickTwitterLink();
    const newPage = await pagePromise;
    await newPage.waitForLoadState('commit');
    await expect(newPage).toHaveURL(URLS.TWITTER);
    await newPage.close();
  });

  test('TC_04.002.01 | Social Media > Facebook > Verify Facebook link opens in new tab with correct URL', async ({
    context,
  }) => {
    const pagePromise = context.waitForEvent('page');
    await footer.clickFacebookLink();
    const newPage = await pagePromise;
    await newPage.waitForLoadState('commit');
    await expect(newPage).toHaveURL(URLS.FACEBOOK);
    await newPage.close();
  });

  test('TC_04.003.01 | Social Media > LinkedIn > Verify LinkedIn link opens in new tab with correct URL', async ({
    context,
  }) => {
    const pagePromise = context.waitForEvent('page');
    await footer.clickLinkedinLink();
    const newPage = await pagePromise;
    await newPage.waitForLoadState('commit');
    await expect(newPage).toHaveURL(URLS.LINKEDIN);
    await newPage.close();
  });
});
