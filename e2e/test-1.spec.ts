import { test, expect } from '@playwright/test';

test('buyNow', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('rohith@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('passsword');
  await page.getByTestId('button').click();
  await page.getByTestId('grid').locator('div').filter({ hasText: 'Mens Casual Premium Slim Fit' }).getByTestId('button').first().click();
  await page.getByRole('tab', { name: 'Reviews' }).click();
  await page.getByRole('tab', { name: 'About' }).click();
  await expect(page.getByText('Mens Casual Premium Slim Fit')).toBeVisible();
});