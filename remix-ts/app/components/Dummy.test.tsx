import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Dummy } from "./Dummy";

describe("Dummy", () => {
  it("increases the counter", async () => {
    const user = userEvent.setup();
    render(<Dummy />);

    await user.click(screen.getByRole("button", { name: "Increment" }));
    await user.click(screen.getByRole("button", { name: "Increment" }));
    await user.click(screen.getByRole("button", { name: "Increment" }));

    expect(screen.getByText("Counter value: 3")).toBeInTheDocument();
  });

  it("types in the input", async () => {
    const user = userEvent.setup();
    render(<Dummy />);

    screen.getByPlaceholderText("Type here").focus();
    await user.keyboard("Hello, world!");

    expect(screen.getByText("Text value: Hello, world!")).toBeInTheDocument();
  });
});
