import { test } from '@playwright/test';

test('signup', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('ram@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('passsword');
  await page.getByTestId('button').click();
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('ram@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('passsword');
  await page.getByTestId('button').click();
});