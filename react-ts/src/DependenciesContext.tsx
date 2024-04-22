import { createContext, useContext } from "react";
import { LoginUseCase } from "./use-cases/LoginUseCase.ts";

export type Dependencies = {
  loginUseCase: LoginUseCase;
};

export const DependenciesContext = createContext<Dependencies>(
  null as null as any,
);

export function useDependencies() {
  const dependencies = useContext(DependenciesContext);

  if (!dependencies) {
    throw new Error("Dependencies context must be provided");
  }

  return { dependencies };
}
