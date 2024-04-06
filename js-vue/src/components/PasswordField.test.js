import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import PasswordField from "./PasswordField.vue";

describe("PasswordField", () => {
  it("changes the value of the input", async () => {
    const user = userEvent.setup();

    const wrapper = render(PasswordField, {
      props: {
        id: "email",
        labelText: "Your email",
        modelValue: "",
        "onUpdate:modelValue": (e) => wrapper.rerender({ modelValue: e }),
      },
    });

    await user.click(screen.getByLabelText("Your email"));
    await user.keyboard("prueba@gmail.com");

    expect(screen.getByLabelText("Your email")).toHaveValue("prueba@gmail.com");
  });

  it("changes the input to visible", async () => {
    const user = userEvent.setup();

    const wrapper = render(PasswordField, {
      props: {
        id: "email",
        labelText: "Your email",
        modelValue: "",
        "onUpdate:modelValue": (e) => wrapper.rerender({ modelValue: e }),
      },
    });

    await user.click(screen.getByLabelText("Show password"));

    expect(screen.getByLabelText("Your email")).toHaveAttribute("type", "text");
  });
});
