import {test, expect} from "@playwright/test"

test("Verify Home Page", async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
    console.log("navigated to software testing practice homePage sucessfully");
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");

    const productGrid =  page.locator(".col-md-9");
    await expect(productGrid.getByRole("link")).toHaveCount(9);

    await page.getByTestId("search-query").fill("Thor Hammer");
    await page.getByTestId("search-submit").click();
   
    const selectedProduct = page.getByAltText("Thor Hammer");
    expect(selectedProduct).toBeVisible();
    selectedProduct.click();









})