import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import { screen, waitFor } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppRoutes } from "../navigation/AppRoutes.jsx";

describe("signup", () => {
  it("redirects to the success page when signup is ok", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Signup"));

    await waitFor(() => {
      screen.getByText("Sign up success");
    });
  });
});
