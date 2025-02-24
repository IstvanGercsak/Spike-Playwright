import generalCommands from "../../../../support/generalCommands/general.commands"
import navigation from "../../../../support/page_objects/navigation.page"

// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach("Authentication", async ({ page, request }) => {
    await page.goto(process.env.BASE_URL);
    await generalCommands.login(page, request);
})

test('Voucher campaign screen is available', async ({ page }) => {
    await page.locator(navigation.manager()).click()
    await page.locator("#vouchers").click()
    await expect(page).toHaveTitle('Vouchers | My Phorest');
    await page.locator("[name=voucher-campaigns-tab]").click()
    await expect(page).toHaveURL(/voucher-campaigns/);
});

