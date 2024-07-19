import { test } from '@playwright/test';

test('theme', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('rohith@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('passsword');
  await page.getByTestId('button').click();
  await page.locator('div').filter({ hasText: /^SPARROWMART0$/ }).getByRole('button').nth(1).click();
  await page.getByRole('menuitem', { name: 'Edith' }).click();
  await page.locator('div').filter({ hasText: /^SPARROWMART0$/ }).getByRole('button').nth(1).click();
  await page.getByRole('menuitem', { name: 'Jarvis' }).click();
  await page.locator('div').filter({ hasText: /^SPARROWMART0$/ }).getByRole('button').nth(1).click();
  await page.getByRole('menuitem', { name: 'Friday' }).click();
});