import generalCommands from "../../support/generalCommands/general.commands"
import navigation from "../../support/page_objects/navigation.page"

// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach("Authentication", async ({ page, request }) => {
    await page.goto(process.env.BASE_URL);
    await generalCommands.login(page, request);
})

test('Clients screen is available', async ({ page }) => {
    await page.locator(navigation.client()).click()
    await expect(page).toHaveTitle('Clients | My Phorest');
    await expect(page).toHaveURL(/clients/);
});

test('Create a new client', async ({ page }) => {
    await page.locator(navigation.client()).click()
    await page.getByRole('button', { name: 'Add New Client' }).click()
    await page.locator("#notes").click()
    await page.locator("#notes").fill("Client Test Notes")
    await page.locator("//input[starts-with(@name, 'first-name-')]").click();
    await page.locator("//input[starts-with(@name, 'first-name-')]").fill("TestFirstName");
    await page.locator("//input[starts-with(@name, 'last-name-')]").click();
    await page.locator("//input[starts-with(@name, 'last-name-')]").fill("TestLastName");
    await page.locator("//input[starts-with(@name, 'phone-number-')]").click();
    await page.locator("//input[starts-with(@name, 'phone-number-')]").fill("0891234567");
    await page.locator("//input[starts-with(@name, 'land-line-')]").click();
    await page.locator("//input[starts-with(@name, 'land-line-')]").fill("0891234567");
    await page.locator("//input[starts-with(@name, 'email-')]").click();
    await page.locator("//input[starts-with(@name, 'email-')]").fill("test@test.com");
    await page.locator("//input[starts-with(@name, 'dob-day-')]").click();
    await page.locator("//input[starts-with(@name, 'dob-day-')]").fill("30");
    
    await page.locator("//input[starts-with(@name, 'dob-year-')]").click();
    await page.locator("//input[starts-with(@name, 'dob-year-')]").fill("1988");

    await page.locator("//input[starts-with(@name, 'address-line-1-')]").click();
});