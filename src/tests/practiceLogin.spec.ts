import { test, expect } from '@playwright/test';

test('Practice site login and LIVE SOON verification', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://freelance-learn-automation.vercel.app/login');

  // Enter credentials
  await page.fill('input[name="email"]', 'kamleshautomation1@gmail.com');
  await page.fill('input[name="password"]', 'UiAutomation1');

  // Click Sign in
  await page.click('button:has-text("Sign in")');

  // Wait for navigation to dashboard
  await page.waitForURL('https://freelance-learn-automation.vercel.app/');

  // Click on Practice
  await page.click('a:has-text("Practice")');

  // Verify presence of "LIVE SOON"
  await expect(page.locator('text=LIVE SOON')).toBeVisible();
});
