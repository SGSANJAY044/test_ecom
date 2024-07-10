import { test, expect } from '@playwright/test';

test('i18n', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.locator('input[type="email"]').click();
  await page.locator('input[type="email"]').fill('rohith@gmail.com');
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill('passsword');
  await page.getByTestId('button').click();
  await page.locator('div').filter({ hasText: /^SPARROWMART0$/ }).getByRole('button').first().click();
  await page.getByRole('menuitem', { name: 'Tamil' }).click();
  await expect(page.getByTestId('grid')).toHaveText(/ஆண்கள் சாதாரண பிரீமியம் மெலிந்த உடை டி-ஷர்ட்கள்/)
});