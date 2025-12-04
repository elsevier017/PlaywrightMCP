import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async verifyProductCards(expected: Array<{ name: string; price?: string }>) {
    for (const item of expected) {
      const card = this.page.locator(`.inventory_item:has-text("${item.name}")`);
      await expect(card).toBeVisible();
      if (item.price) {
        await expect(card.locator('.inventory_item_price')).toContainText(item.price);
      }
    }
  }

  async getProductDetails(productName: string) {
    const card = this.page.locator(`.inventory_item:has-text("${productName}")`);
    const name = await card.locator('.inventory_item_name').innerText();
    const price = await card.locator('.inventory_item_price').innerText();
    return { name, price };
  }

  async addToCart(productName: string) {
    const card = this.page.locator(`.inventory_item:has-text("${productName}")`);
    await card.locator('button.btn_primary').click();
  }
}
