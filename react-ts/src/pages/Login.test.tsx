import React from "react";
import { describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/dom";
import { Login } from "./Login";
import { myRender } from "../../tests/MyRender.tsx";

describe("Login", () => {
  it("sends the right params to the auth service", async () => {
    const { user, authService } = myRender(<Login />);

    vi.spyOn(authService, "login");

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Login"));

    await waitFor(() => {
      expect(authService.login).toHaveBeenCalledWith(
        "prueba@gmail.com",
        "mySuperPassword",
      );
    });
  });

  it("redirects to recipe page after login", async () => {
    const { user, navigationService } = myRender(<Login />);

    vi.spyOn(navigationService, "navigateToRecipes");

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Login"));

    await waitFor(() => {
      expect(navigationService.navigateToRecipes).toHaveBeenCalled();
    });
  });

  it("saves jwt in token repository", async () => {
    const { user, tokenRepository } = myRender(<Login />);

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Login"));

    await tokenRepository.expectTokenToHaveBeenSaved();
  });

  it("displays error if authentication is wrong", async () => {
    const { user, authService } = myRender(<Login />);

    vi.spyOn(authService, "login").mockImplementationOnce(async () => {
      throw new Error("wrong_email_or_password");
    });

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Login"));

    await waitFor(() => {
      expect(screen.getByText("Wrong email or password")).toBeInTheDocument();
    });
  });
});
