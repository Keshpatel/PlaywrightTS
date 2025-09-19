import {test, expect} from "@playwright/test"

test.describe("Verify Home Page with No Auth ", () => {

  test.beforeEach(async ({ page }) => {
     await page.goto("https://practicesoftwaretesting.com/");
     console.log("navigated to software testing practice homePage sucessfully");
  });
  
  test("visual test", async ({ page }) => {
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveScreenshot("home-page-no-auth.png");
  }); 

  test("Verify Home Page sign In Button", async ({ page }) => {    
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
  });

  test("Verify home Page title ", async ({ page }) => {  
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");
  });

  test("Verify Product grid ", async ({ page }) => {  
    const productGrid =  page.locator(".col-md-9");
    await expect(productGrid.getByRole("link")).toHaveCount(9);
   });

  test("Verify Product Thor Hammer", async ({ page }) => {
    await page.getByTestId("search-query").fill("Thor Hammer");
    await page.getByTestId("search-submit").click();    
    const selectedProduct = page.getByAltText("Thor Hammer");
    await expect(selectedProduct).toBeVisible();
    await selectedProduct.click();
  });
});

test.describe("Home Page customer 01 auth ", () => {
  test.use ({storageState: ".auth/customer01.json" });
  test.beforeEach(async ({page}) => {
    await page.goto("https://practicesoftwaretesting.com/");
  });

  test("visual test authorized ", async ({ page }) => {
    await page.waitForLoadState("networkidle");
    await expect (page).toHaveScreenshot("home-page-customer.png");
  });

  test("Verify Customer 01 Signed in ", async ({page})=> {
    await expect(page.getByTestId("nav-sign-in")).not.toBeVisible();  
    await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');  
  });
});