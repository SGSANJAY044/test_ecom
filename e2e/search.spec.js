import { test, expect } from '@playwright/test';

test('search', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('rohith@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('passsword');
  await page.getByTestId('button').click();
  await expect(page).toHaveURL('http://localhost:3000/home')
  await page.getByTestId('input').click();
  await page.getByTestId('input').fill('Mens Cotton Jacket');
  await expect(page.getByText('Mens Cotton Jacket')).toBeVisible();
});