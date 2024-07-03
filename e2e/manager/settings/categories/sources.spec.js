import generalCommands from "../../../../support/generalCommands/general.commands"
import navigation from "../../../../support/page_objects/navigation.page"

// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach("Authentication", async ({ page, request }) => {
    await page.goto(process.env.BASE_URL);
    await generalCommands.login(page, request);
})

test('Sources screen is available', async ({ page }) => {
    await page.locator(navigation.manager()).click()
    await page.locator(navigation.categories()).click()
    await page.getByText(navigation.sources()).click()
    await expect(page).toHaveTitle('My Phorest');
    await expect(page).toHaveURL(/sources/);
});