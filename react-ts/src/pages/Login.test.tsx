import { describe, it, expect, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { Login } from "./Login.tsx";
import { screen } from "@testing-library/dom";
import { userEvent } from "@testing-library/user-event";

describe("Login", () => {
  it("redirects to recipe page after login", async () => {
    const user = userEvent.setup();
    const navigateSpy = vi.fn();
    render(<Login navigate={navigateSpy} />);

    await user.type(
      screen.getByLabelText("Your email"),
      "linustorvalds@gmail.com",
    );
    await user.type(screen.getByLabelText("Your password"), "ilovecats");
    await user.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(
      () => {
        expect(navigateSpy).toHaveBeenCalledWith("/recipes");
      },
      { timeout: 5000 },
    );
  });
});
