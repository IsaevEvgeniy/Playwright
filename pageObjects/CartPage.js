import { expect } from '@playwright/test';
import { USERS } from '../support/constants';

class СartPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.locatorElements = page.locator('.cart_item');
    this.checkoutButton = page.locator('button', { hasText: 'Checkout' });
    this.removeProduct = page.locator('button', { hasText: 'Remove' });
    this.continueShoppingButton = page.locator('button', { hasText: 'Continue Shopping' });

    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.cancelButton = page.locator('#cancel');
    this.continueButton = page.locator('#continue');
    this.locatorError = page.locator('h3[data-test="error"]');

    this.locatorItemTotal = page.locator('.summary_subtotal_label');
    this.locatorTax = page.locator('.summary_tax_label');
    this.locatorSumTotal = page.locator('summary_tax_label');
    this.cancelButton = page.locator('#cancel');
    this.finishButton = page.locator('#finish');

    this.orderCompletionMessage = page.locator('.complete-header');
    this.backHomeButton = page.locator('[class*="btn_small"]');
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async getItemsCount() {
    if (await this.cartBadge.isVisible()) {
      return parseInt(await this.cartBadge.textContent());
    }
    return 0;
  }

  async clearItems(number) {
    await this.removeProduct.nth(number).click();
  }

  async verifyElementCount(expectedCount) {
    const getAllElements = await this.locatorElements.all();
    const actualCount = getAllElements.length;
    if (actualCount !== expectedCount) {
      throw new Error(`Ожидалось ${expectedCount}, найдено ${actualCount}`);
    }
    return true;
  }

  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }

  async clickContinueShoppingButton() {
    await this.continueShoppingButton.click();
  }

  async fillingInOrderInformation(userType) {
    const user = USERS[userType];
    await this.firstName.fill(user.FIRST_NAME);
    await this.lastName.fill(user.LAST_NAME);
    await this.postalCode.fill(user.POSTAL_CODE);
    await this.continueButton.click();
  }

  async clickCancelButton() {
    await this.cancelButton.click();
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async clickFinishButton() {
    await this.finishButton.click();
  }

  async verifyElement() {
    const text = await this.orderCompletionMessage.textContent();
    return text.includes('Thank you for your order');
  }

  async verifyItemsCount(expectedCount) {
    const actualCount = await this.getItemsCount();
    expect(actualCount).toBe(expectedCount);
  }

  async verifyErrorMessages(Error) {
    await expect(this.locatorError).toBeVisible();
    await expect(this.locatorError).toHaveText(Error);
  }

  async clickBackHomeButton() {
    await this.backHomeButton.click();
  }
}

export default СartPage;
