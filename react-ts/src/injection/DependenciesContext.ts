import { createContext, useContext } from "react";
import { Container } from "inversify";

export const DependenciesContext = createContext(null as unknown as Container);

export function useDependencies() {
  const dependencies = useContext(DependenciesContext);

  if (!dependencies) {
    throw new Error("You must use useDependencies inside DependenciesProvider");
  }

  return dependencies;
}
