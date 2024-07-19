import { test, expect } from '@playwright/test';

test('filterByCategories', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Login here' }).click();
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('rohith@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('passsword');
  await page.getByTestId('button').click();
  await page.locator('.filter-icon > path').click();
  await page.getByRole('button', { name: 'Categories' }).click();
  await page.getByRole('menuitem', { name: 'jewelery' }).click();
  await page.getByRole('banner').getByRole('img').click();
  await expect(page.getByText('Solid Gold Petite Micropave')).toBeVisible();
});
test('filterByRating', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Login here' }).click();
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('rohith@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('passsword');
  await page.getByTestId('button').click();
  await page.locator('body').press('ControlOrMeta+a');
  await page.locator('body').press('ControlOrMeta+a');
  await page.locator('.filter-icon > path').click();
  await page.getByTestId('drawer').locator('span').nth(2).click();
  await page.getByTestId('drawer').getByRole('img').click();
  await expect(page.getByText('Mens Casual Slim Fit')).toBeVisible();
});