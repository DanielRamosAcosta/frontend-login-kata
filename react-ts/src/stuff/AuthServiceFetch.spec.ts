import { describe, it, expect, beforeEach } from "vitest";
import { AuthServiceFetch } from "./AuthServiceFetch.ts";
import { DomainError } from "../errors/DomainError.ts";

describe("AuthServiceFetch", () => {
  let authService: AuthServiceFetch;

  beforeEach(() => {
    authService = new AuthServiceFetch();
  });

  it("returns data with right password", async () => {
    const email = "linustorvalds@gmail.com";
    const password = "ilovecats";

    const data = await authService.login(email, password);

    expect(data.jwt).toMatch(/eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9/);
  });

  it("throws error with empty password", async () => {
    const email = "linustorvalds@gmail.com";
    const password = "";

    const result = authService.login(email, password);

    await expect(result).rejects.toThrowError(
      new DomainError("missing_password_field"),
    );
  });

  it("throws error with empty email", async () => {
    const email = "";
    const password = "ilovecats";

    const result = authService.login(email, password);

    await expect(result).rejects.toThrowError(
      new DomainError("missing_email_field"),
    );
  });

  it("throws error with wrong email", async () => {
    const email = "wrongEmail@gmail.com";
    const password = "ilovecats";

    const result = authService.login(email, password);

    await expect(result).rejects.toThrowError(
      new DomainError("wrong_email_or_password"),
    );
  });
});
