export const URLS = {
  LOGIN: 'https://www.saucedemo.com/',
  INVENTORY: 'https://www.saucedemo.com/inventory.html',
  CART: 'https://www.saucedemo.com/cart.html',
  CHECKOUT_STEP_ONE: 'https://www.saucedemo.com/checkout-step-one.html',
  CHECKOUT_STEP_TWO: 'https://www.saucedemo.com/checkout-step-two.html',
  CHECKOUT_COMPLETE: 'https://www.saucedemo.com/checkout-complete.html',
  TWITTER: 'https://x.com/saucelabs',
  FACEBOOK: 'https://www.facebook.com/saucelabs',
  LINKEDIN: 'https://www.linkedin.com/company/sauce-labs/',
};

export const USERS = {
  STANDARD_USER: {
    USER_NAME: 'standard_user',
    PASSWORD: 'secret_sauce',
    FIRST_NAME: '12345',
    LAST_NAME: '12345',
    POSTAL_CODE: '12345',
  },
  LOCKED_OUT_USER: {
    USER_NAME: 'locked_out_user',
    PASSWORD: 'secret_sauce',
    FIRST_NAME: '',
    LAST_NAME: '12345',
    POSTAL_CODE: '12345',
  },
  PROBLEM_USER: {
    USER_NAME: 'problem_user',
    PASSWORD: '',
    FIRST_NAME: '12345',
    LAST_NAME: '',
    POSTAL_CODE: '12345',
  },
  PERFORMANCE_GLITCH_USER: {
    USER_NAME: '',
    PASSWORD: 'secret_sauce',
    FIRST_NAME: '',
    LAST_NAME: '',
    POSTAL_CODE: '',
  },
  ERROR_USER: {
    USER_NAME: 'error_user',
    PASSWORD: '123456',
    FIRST_NAME: '12345',
    LAST_NAME: '12345',
    POSTAL_CODE: '',
  },
  VISUAL_USER: {
    USER_NAME: 'visual_user',
    PASSWORD: 'secret_sauce',
    FIRST_NAME: '',
    LAST_NAME: '',
    POSTAL_CODE: '',
  },
};

export const TYPES = {
  NAME_ASC: 'Name (A to Z)',
  NAME_DESC: 'Name (Z to A)',
  PRICE_ASC: 'Price (low to high)',
  PRICE_DESC: 'Price (high to low)',
};

export const ERROR_MESSAGES = {
  USER_NAME_REQUIRED: 'Epic sadface: Username is required',
  PASSWORD_REQUIRED: 'Epic sadface: Password is required',
  USER_NAME_PASSWORD_MISMATCH:
    'Epic sadface: Username and password do not match any user in this service',

  FIRST_NAME: 'Error: First Name is required',
  LAST_NAME: 'Error: Last Name is required',
  POSTAL_CODE: 'Error: Postal Code is required',
};
