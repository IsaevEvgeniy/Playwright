import { TYPES } from '../support/constants';

class Filter {
  constructor(page) {
    this.page = page;
    this.sortSelect = page.locator('.product_sort_container');
  }

  async nameAscending() {
    await this.sortSelect.selectOption(TYPES.NAME_ASC);
  }

  async nameDescending() {
    await this.sortSelect.selectOption(TYPES.NAME_DESC);
  }

  async priceAscending() {
    await this.sortSelect.selectOption(TYPES.PRICE_ASC);
  }

  async priceDescending() {
    await this.sortSelect.selectOption(TYPES.PRICE_DESC);
  }
}

export default Filter;
