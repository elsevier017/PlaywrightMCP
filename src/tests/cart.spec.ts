import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import { CartPage } from '../pages/cart.page';


test('Cart flow: add, verify, continue shopping, checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  await page.goto('/');
  await loginPage.loginWithValidData();

  // Add two products
  await homePage.addToCart('Sauce Labs Backpack');
  await homePage.addToCart('Sauce Labs Bike Light');

  // Go to cart
  await page.click('.shopping_cart_link');
  await cartPage.verifySelectedProducts(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);

  // Continue shopping
  await cartPage.continueShopping();
  await expect(page.locator('.inventory_list')).toBeVisible();

  // Go to cart and checkout
  await page.click('.shopping_cart_link');
  await cartPage.proceedCheckout();
  await expect(page.locator('[data-test="checkout-info-container"]')).toBeVisible();
});
