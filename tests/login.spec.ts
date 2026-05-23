import { test, expect } from '@playwright/test';

test('user can login with valid credentials', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect (page.getByText('You logged into a secure area!')).toBeVisible();
});

test('user can`t log in with invalid password', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('WrongPassword!');
    await page.click('button[type="submit"]');
    await expect (page.getByText('Your password is invalid!')).toBeVisible();
});