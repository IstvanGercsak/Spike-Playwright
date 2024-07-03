import loginCommands from "../support/page_objects/login.commands"

// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach("Authentication", async ({ page }) => {
  await page.goto(process.env.BASE_URL);
})

test('Login with user interaction', async ({ page }) => {
  await loginCommands.login(page, process.env.TESTUSER_USERNAME, process.env.TESTUSER_PASSWORD);
  await expect(page).toHaveURL(/appointments/)
});