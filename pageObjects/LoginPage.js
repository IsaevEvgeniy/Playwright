import { expect } from '@playwright/test';
import { URLS, USERS } from '../support/constants';

class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.button = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }
  async openWebsite() {
    await this.page.goto(URLS.LOGIN);
  }

  async loginAs(userType) {
    const user = USERS[userType];
    await this.username.fill(user.USER_NAME);
    await this.password.fill(user.PASSWORD);
    await this.button.click();
  }

  async verifyErrorMessage(Error) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(Error);
  }
}

export default LoginPage;
