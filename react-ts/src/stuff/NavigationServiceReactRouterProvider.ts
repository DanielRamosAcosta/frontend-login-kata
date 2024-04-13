import { NavigateFunction } from "react-router-dom";
import { interfaces } from "inversify";

export const navigationServiceReactRouterProvider = (
  context: interfaces.Context,
) => {
  return async () => {
    const { NavigationServiceReactRouter } = await import(
      "./NavigationServiceReactRouter.ts"
    );

    const navigate = context.container.get<NavigateFunction>(
      "ReactRouterNavigate",
    );

    return NavigationServiceReactRouter.create(navigate);
  };
};
