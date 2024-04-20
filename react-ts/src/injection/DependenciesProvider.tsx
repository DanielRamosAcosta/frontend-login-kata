import React from "react";
import { DependenciesContext } from "./DependenciesContext.ts";
import { createContainer } from "./createContainer.ts";
import { Token } from "../stuff/Token.ts";
import { useTranslation } from "react-i18next";
import { router } from "../navigation/routes.ts";
import { e2eContainer } from "./e2eContainer.ts";
import { Container } from "inversify";

let container: Container = createContainer();

if (import.meta.env.VITE_EXECUTING_E2E === "true") {
  container = e2eContainer;
}

export const DependenciesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const translation = useTranslation();

  if (!container.isBound(Token.I18NEXT)) {
    container.bind(Token.I18NEXT).toConstantValue(translation);
  }

  if (!container.isBound(Token.REACT_ROUTER_NAVIGATE)) {
    container
      .bind(Token.REACT_ROUTER_NAVIGATE)
      .toConstantValue(router.navigate);
  }

  return (
    <DependenciesContext.Provider value={container}>
      {children}
    </DependenciesContext.Provider>
  );
};
