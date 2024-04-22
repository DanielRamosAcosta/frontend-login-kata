import { describe, it, expect, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { Login } from "./Login.tsx";
import { screen } from "@testing-library/dom";
import user from "@testing-library/user-event";
import { LoginUseCase } from "../use-cases/LoginUseCase.ts";
import { AuthService } from "../domain/AuthService.ts";
import { TokenRepository } from "../domain/TokenRepository.ts";
import { Router } from "../domain/Router.ts";
import { DependenciesContext } from "../DependenciesContext.tsx";

describe("Login", () => {
  it("redirects to recipe page after login", async () => {
    const authService: AuthService = {
      login: async () => "jwt",
    };
    const tokenRepository: TokenRepository = {
      save: vi.fn(),
    };
    const router: Router = {
      goToRecipes: vi.fn(),
    };

    const loginUseCase = new LoginUseCase(authService, tokenRepository, router);
    render(
      <DependenciesContext.Provider value={{ loginUseCase }}>
        <Login />
      </DependenciesContext.Provider>,
    );

    await user.type(
      screen.getByLabelText("Your email"),
      "linustorvalds@gmail.com",
    );
    await user.type(screen.getByLabelText("Your password"), "ilovecats");
    await user.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(router.goToRecipes).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Login" })).toBeEnabled();
    });
  });
});
