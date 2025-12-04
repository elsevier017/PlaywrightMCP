import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async loginWithValidData(username: string = process.env.USERNAME || 'standard_user', password: string = process.env.PASSWORD || 'secret_sauce') {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async loginWithInvalidData(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}
