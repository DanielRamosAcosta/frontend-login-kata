import { NavigateFunction } from "react-router-dom";
import { interfaces } from "inversify";

export const navigationServiceReactRouterProvider2 = async (
  context: interfaces.Context,
) => {
  const { NavigationServiceReactRouter } = await import(
    "./NavigationServiceReactRouter.ts"
  );

  const navigate = context.container.get<NavigateFunction>(
    "ReactRouterNavigate",
  );

  return NavigationServiceReactRouter.create(navigate);
};
