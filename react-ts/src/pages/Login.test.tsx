import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Login } from "./Login.tsx";
import userEvent from "@testing-library/user-event";
import { LoginUseCase } from "../services/LoginUseCase.ts";

describe("Login", () => {
  it("redirects to recipe page after login", async () => {
    const user = userEvent.setup();
    const loginUseCase = {
      login: vi.fn(() => Promise.resolve()),
    } as unknown as LoginUseCase;
    render(<Login loginUseCase={loginUseCase} />);
    const email = "linustorvalds@gmail.com";
    const password = "ilovecats";

    await user.type(screen.getByLabelText("Your email"), email);
    await user.type(screen.getByLabelText("Your password"), password);
    await user.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() => {
      expect(loginUseCase.login).toHaveBeenCalledWith(email, password);
    });
  });
});
