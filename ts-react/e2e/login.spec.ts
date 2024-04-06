import { expect, test } from "@playwright/test";

test.describe("login", () => {
  test("allows to login", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Your email").fill("linustorvalds@gmail.com");
    await page.getByLabel("Your password").fill("ilovecats");

    await page.getByText("Signup").press("Enter");

    await expect(page.getByRole("heading", { name: "Recipes" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Pizza" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Pasta" })).toBeVisible();
  });
});
