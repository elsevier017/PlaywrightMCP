import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async verifySelectedProducts(productNames: string[]) {
    for (const name of productNames) {
      const item = this.page.locator(`.cart_item:has-text("${name}")`);
      await expect(item).toBeVisible();
    }
  }

  async continueShopping() {
    await this.page.click('button:has-text("Continue shopping")');
  }

  async proceedCheckout() {
    await this.page.click('button:has-text("Checkout")');
  }
}
