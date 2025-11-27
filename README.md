## Применение автотестов с непрерывной интеграцией Playwright и GitHub Actions.

## Структура проекта

```
Playwright/
│
├── allure-report/
├── tests/
│   ├── cart_management.spec.js
│   ├── checkout_process.spec.js
│   ├── product_sorting.spec.js
│   ├── social_media_links.spec.js
│   └── user_authentication.spec.js
│
├── pageObjects/
│   ├── Menu.js
│   ├── Filter.js
│   ├── Footer.js
│   ├── CartPage.js
│   ├── InventoryPage.js
│   └── LoginPage.js
│
├── support/
│   └── constants.js
│
├── playwright.config.js
├── package-lock.json
├── package.json
└── README.md
```

## Набор тестов

| Test Case ID | File                          | Description                           | Category           |
| ------------ | ----------------------------- | ------------------------------------- | ------------------ |
| TC_01.001.01 | `user_authentication.spec.js` | Verify Successful Standard User Login | User Management    |
| TC_01.002.01 | `user_authentication.spec.js` | Verify Empty User Name Validation     | User Management    |
| TC_01.003.01 | `user_authentication.spec.js` | Verify Empty Password Validation      | User Management    |
| TC_01.004.01 | `user_authentication.spec.js` | Verify Invalid Credentials Validation | User Management    |
| TC_02.001.01 | `product_sorting.spec.js`     | Verify Price Ascending Sorting        | Product Management |
| TC_02.002.01 | `product_sorting.spec.js`     | Verify Price Descending Sorting       | Product Management |
| TC_02.003.01 | `product_sorting.spec.js`     | Verify Name Ascending Sorting         | Product Management |
| TC_02.004.01 | `product_sorting.spec.js`     | Verify Name Descending Sorting        | Product Management |
| TC_03.001.01 | `cart_management.spec.js`     | Verify cart badge updates             | Cart Management    |
| TC_03.002.01 | `cart_management.spec.js`     | Verify item removal from cart         | Cart Management    |
| TC_03.003.01 | `cart_management.spec.js`     | Verify Continue Shopping button       | Cart Management    |
| TC_04.001.01 | `social_media_links.spec.js`  | Verify Twitter link                   | Social Media       |
| TC_04.002.01 | `social_media_links.spec.js`  | Verify Facebook link                  | Social Media       |
| TC_04.003.01 | `social_media_links.spec.js`  | Verify LinkedIn link                  | Social Media       |
| TC_05.001.01 | `checkout_process.spec.js`    | Verify successful checkout            | Checkout Process   |
| TC_05.002.01 | `checkout_process.spec.js`    | Verify first name validation          | Checkout Process   |
| TC_05.003.01 | `checkout_process.spec.js`    | Verify last name validation           | Checkout Process   |
| TC_05.004.01 | `checkout_process.spec.js`    | Verify postal code validation         | Checkout Process   |

## Инструкция по запуску

## 1. Установка зависимостей

```bash
npm install
```

## 2. Установка браузеров Playwright

```bash
npx playwright install
```

## 3. Запуск тестов

### Режим без графического интерфейса

```bash
npx playwright test
```

### Режим с графическим интерфейсом

```bash
npx playwright test --ui
```

## 4. Просмотр отчетов

### Генерация отчета Allure

```bash
allure generate allure-results
```

### Открытие отчета

```bash
allure open allure-report
```

### Быстрый просмотр (одна команда)

```bash
npx allure serve allure-results
```

### Генерация отчета Playwright

```bash
npx playwright show-report
```
