import generalCommands from "../../../../support/generalCommands/general.commands"
import navigation from "../../../../support/page_objects/navigation.page"

// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach("Authentication", async ({ page, request }) => {
    await page.goto(process.env.BASE_URL);
    await generalCommands.login(page, request);
})

test('Brand settings screen is available', async ({ page }) => {
    await page.locator(navigation.manager()).click()
    await page.locator(navigation.business()).click()
    await page.locator(navigation.brandSettings()).click()
    await expect(page).toHaveTitle('Brand Settings | My Phorest')
    await expect(page).toHaveURL(/brand-settings/)
});