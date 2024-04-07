import { expect, test } from "@playwright/test";

test.describe("login", () => {
  test("allows to login", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Your email").fill("linustorvalds@gmail.com");
    await page.getByLabel("Your password").fill("ilovecats");

    await page.getByRole("button", { name: "Login" }).press("Enter");

    await expect(page.getByRole("heading", { name: "Recipes" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Pizza" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Pasta" })).toBeVisible();
  });

  test("shows error if email not filled", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Your password").fill("ilovecats");

    await page.getByRole("button", { name: "Login" }).press("Enter");

    await expect(page.getByText("Email field is required")).toBeVisible();
  });

  test("shows error if password not filled", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Your email").fill("linustorvalds@gmail.com");

    await page.getByRole("button", { name: "Login" }).press("Enter");

    await expect(page.getByText("Password field is required")).toBeVisible();
  });

  test("shows error if wrong password", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Your email").fill("linustorvalds@gmail.com");
    await page.getByLabel("Your password").fill("wrongpassword");

    await page.getByRole("button", { name: "Login" }).press("Enter");

    await expect(page.getByText("Wrong email or password")).toBeVisible();
  });

  test("shows password after clicking the visibility", async ({ page }) => {
    await page.goto("/");
    await page.getByLabel("Your email").fill("linustorvalds@gmail.com");
    const passwordInput = page.getByLabel("Your password");
    await passwordInput.fill("ilovecats");

    await page.getByLabel("Show password").click();

    await expect(passwordInput).toHaveAttribute("type", "text");
  });
});
