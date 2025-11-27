class Menu {
  constructor(page) {
    this.page = page;
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.allItems = page.locator('#inventory_sidebar_link');
    this.about = page.locator('#about_sidebar_link');
    this.logout = page.locator('#logout_sidebar_link');
    this.resetAppState = page.locator('#reset_sidebar_link');
    this.closeButton = page.locator('#react-burger-cross-btn');
  }

  async open() {
    await this.menuButton.click();
  }

  async clickAllItems() {
    await this.allItems.click();
  }

  async clickAbout() {
    await this.about.click();
  }

  async clickLogout() {
    await this.logout.click();
  }

  async clickResetAppState() {
    await this.resetAppState.click();
  }

  async close() {
    await this.closeButton.click();
  }

  async logoutUser() {
    await this.open();
    await this.clickLogout();
  }
}

export default Menu;
