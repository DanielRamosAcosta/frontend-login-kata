import React from "react";
import userEvent from "@testing-library/user-event";
import { createFakeContainer } from "../src/injection/createFakeContainer.ts";
import { render } from "@testing-library/react";
import { DependenciesContext } from "../src/injection/DependenciesContext.ts";

type RenderDependencies = Parameters<typeof createFakeContainer>[0];

export function myRender(
  ui: React.ReactNode,
  dependencies: RenderDependencies = {},
) {
  const user = userEvent.setup();
  const { container, ...rest } = createFakeContainer(dependencies);

  render(
    <DependenciesContext.Provider value={container}>
      {ui}
    </DependenciesContext.Provider>,
  );

  return { user, container, ...rest };
}
