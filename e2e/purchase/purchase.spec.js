import generalCommands from "../../support/generalCommands/general.commands"

// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach("Authentication", async ({ page, request }) => {
    await page.goto(process.env.BASE_URL);
    await generalCommands.login(page, request);
})

test('Purchase screen is available', async ({ page }) => {
    await page.locator('#main-nav-purchase-link').click()
    await expect(page).toHaveTitle('My Phorest');
    await expect(page).toHaveURL(/purchase/);
});