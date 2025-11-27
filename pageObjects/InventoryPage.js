class Header {
  constructor(page) {
    this.logo = page.locator('.app_logo');
    this.title = page.locator('.title');
  }

  async getTitleText() {
    return await this.title.textContent();
  }
}

class Product {
  constructor(page) {
    this.page = page;
    this.locatorProduct = page.locator('.inventory_item');
    this.locatorPrices = page.locator('.inventory_item_price');
    this.locatorName = page.locator('.inventory_item_name ');
    this.addToCartButtons = page.locator('button', { hasText: 'Add to cart' });
  }

  async getPrices() {
    const allProduct = await this.locatorPrices.all();
    const pricesArray = [];

    for (const element of allProduct) {
      if ((await element.count()) > 0) {
        const priceText = await element.textContent();
        pricesArray.push(priceText);
      }
    }
    return pricesArray;
  }

  async getName() {
    const allName = await this.locatorName.all();
    const nameArray = [];

    for (const element of allName) {
      if ((await element.count()) > 0) {
        const nameText = await element.textContent();
        nameArray.push(nameText);
      }
    }
    return nameArray;
  }

  async clickButtonAddToCart(number) {
    const product = this.locatorProduct.nth(number);
    const addButton = product.locator(this.addToCartButtons);
    await addButton.click();
  }
}

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.header = new Header(page);
    this.product = new Product(page);
  }
}

export default InventoryPage;
