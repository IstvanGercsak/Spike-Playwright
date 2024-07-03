import generalCommands from "../support/generalCommands/general.commands"

// @ts-check
const { test } = require('@playwright/test');

test.beforeEach("Authentication", async ({ page }) => {
  await page.goto(process.env.BASE_URL);
})

test('Login with user interaction', async ({ page, request }) => {
  await generalCommands.login(page, request);
});