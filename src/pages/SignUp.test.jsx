import { describe, expect, it, vi } from "vitest";
import { SignUp } from "./SignUp.jsx";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dependencies } from "../dependencies/Dependencies.jsx";
import { createDependenciesFake } from "../factories/CreateDependenciesFake.js";

describe("signup", () => {
  it("redirects to the success page when signup is ok", async () => {
    const dependencies = createDependenciesFake();

    vi.spyOn(dependencies.routerService, "navigateToSignUpSuccess");

    const user = userEvent.setup();
    render(
      <Dependencies.Provider value={dependencies}>
        <SignUp />
      </Dependencies.Provider>
    );

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Signup"));

    expect(
      dependencies.routerService.navigateToSignUpSuccess
    ).toHaveBeenCalled();
  });
});
