import React from "react";
import { describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { Login } from "./Login";
import { DependenciesContext } from "../injection/DependenciesContext.ts";
import userEvent from "@testing-library/user-event";
import { createFakeContainer } from "../injection/createFakeContainer.ts";
import { FAKE_JWT } from "../stuff/AuthServiceFake.ts";
import { DomainError } from "../errors/DomainError.ts";
import { ErrorBoundary } from "../errors/ErrorBoundary.tsx";
import { Container } from "inversify";
import { Token } from "../stuff/Token.ts";
import { ErrorHandlerLog } from "../stuff/ErrorHandlerLog.ts";
import { ErrorHandler } from "../stuff/ErrorHandler.ts";

describe("Login", () => {
  it("sends the right params to the auth service", async () => {
    const { user, authService } = myRender(<Login />);

    vi.spyOn(authService, "login");

    await user.click(screen.getByLabelText("login.email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("login.password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("login.login"));

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

    await user.click(screen.getByLabelText("login.email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("login.password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("login.login"));

    await waitFor(() => {
      expect(navigationService.navigateToRecipes).toHaveBeenCalled();
    });
  });

  it("saves jwt in token repository", async () => {
    const { user, tokenRepository } = myRender(<Login />);

    vi.spyOn(tokenRepository, "saveToken");

    await user.click(screen.getByLabelText("login.email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("login.password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("login.login"));

    await waitFor(() => {
      expect(tokenRepository.saveToken).toHaveBeenCalledWith(FAKE_JWT);
    });
  });

  it("displays error if authentication is wrong", async () => {
    const { user, authService } = myRender(<Login />);

    vi.spyOn(authService, "login").mockImplementationOnce(async () => {
      throw new DomainError("wrong_email_or_password");
    });

    await user.click(screen.getByLabelText("login.email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("login.password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("login.login"));

    await waitFor(() => {
      expect(
        screen.getByText("errors.wrong_email_or_password"),
      ).toBeInTheDocument();
    });
  });
});

function myRender(ui: React.ReactNode) {
  const user = userEvent.setup();
  const { container, ...rest } = createFakeContainer();

  render(
    <DependenciesContext.Provider value={container}>
      {ui}
    </DependenciesContext.Provider>,
  );

  return { user, container, ...rest };
}
