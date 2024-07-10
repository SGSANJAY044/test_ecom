// @ts-check
const { test, expect } = require('@playwright/test');

test('login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.locator('input[type="email"]').click();
    await page.locator('input[type="email"]').fill('rohith@gmail.com');
    await page.locator('input[type="password"]').click();
    await page.locator('input[type="password"]').fill('passsword');
    await page.getByTestId('button').click();
    await expect(page).toHaveURL('http://localhost:3000/home')
});