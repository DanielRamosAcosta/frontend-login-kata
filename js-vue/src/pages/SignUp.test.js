import { describe, expect, it, vi } from "vitest";
import { routerKey } from "vue-router";
import { screen, waitFor } from "@testing-library/dom";
import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import SignUp from "./SignUp.vue";

describe("signup", () => {
  it("redirects to the success page when signup is ok", async () => {
    const user = userEvent.setup();

    const push = vi.fn();

    render(SignUp, {
      global: {
        provide: {
          [routerKey]: { push },
        },
      },
    });

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    await user.click(screen.getByLabelText("Your password"));
    await user.keyboard("mySuperPassword");

    await user.click(screen.getByText("Signup"));

    await waitFor(() => {
      expect(push).toHaveBeenCalledWith("/success");
    });
  });
});
