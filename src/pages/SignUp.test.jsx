import { describe, it } from "vitest";
import { SignUp } from "./SignUp.jsx";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthServiceFake } from "../services/AuthServiceFake.jsx";

describe("signup", () => {
  it("shows a success message when signup is ok", async () => {
    const authService = new AuthServiceFake();

    const user = userEvent.setup();
    render(<SignUp authService={authService} />);

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Signup"));

    await screen.findByText("You have successfully been registered");
  });
});
