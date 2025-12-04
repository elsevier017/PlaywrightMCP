import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { readExcel } from '../utils/excelReader';
import path from 'path';

test.describe('Login Tests', () => {
  const excelPath = path.resolve(__dirname, './data/loginData.xlsx');
  const loginData = readExcel(excelPath, 'Sheet1');

  for (const data of loginData) {
    test(`Login with username: ${data.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await page.goto('/');
      await loginPage.loginWithValidData(data.username, data.password);
      if (data.valid) {
        await expect(page.locator('.inventory_list')).toBeVisible();
      } else {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      }
    });
  }
});
