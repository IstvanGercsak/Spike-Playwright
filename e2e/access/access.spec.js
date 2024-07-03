import generalCommands from "../../support/generalCommands/general.commands"
import navigation from "../../support/page_objects/navigation.page"

// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach("Authentication", async ({ page, request }) => {
    await page.goto(process.env.BASE_URL);
    await generalCommands.login(page, request);
})

test('Clients screen is available', async ({ page }) => {
    await page.locator(navigation.manager()).click()
    await page.locator(navigation.access()).click()
    await expect(page).toHaveTitle('My Phorest');
    await expect(page).toHaveURL(/access-levels/);
});

test('Set access level', async ({ page }) => {
    await page.locator(navigation.manager()).click()
    await page.locator(navigation.access()).click()

    const frameLocator = page.frameLocator("[name='iframe-embed']")

    await frameLocator.locator("[name='search-input']").click()
    await frameLocator.locator("[name='search-input']").fill("asdasdasdad")
    await frameLocator.getByRole('button', { name: 'Management' }).click();
    await frameLocator.getByRole('searchbox', { name: 'Search' }).fill('Reception');
    await frameLocator.getByRole('option', { name: 'Reception' }).click();
});