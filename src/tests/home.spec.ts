import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import { readExcel } from '../utils/excelReader';
import path from 'path';

test.describe('Home Page Product Card Verification', () => {
  const excelPath = path.resolve(__dirname, './data/products.xlsx');
  const products = readExcel(excelPath, 'Sheet1');

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.loginWithValidData();
  });

  test('Verify all product cards', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.verifyProductCards(products);
  });
});
