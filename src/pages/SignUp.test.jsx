import { describe, it } from "vitest";
import { SignUp } from "./SignUp.jsx";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("signup", () => {
  it("works", async () => {
    const user = userEvent.setup();
    render(<SignUp />);

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Signup"));

    await screen.findByText("You have successfully been registered");
  });
});
