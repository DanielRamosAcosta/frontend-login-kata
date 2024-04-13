import { NavigateFunction } from "react-router-dom";
import { interfaces } from "inversify";
import { Token } from "./Token.ts";

export const NavigationServiceProvider = {
  token: Token.NAVIGATOR,
  async useFactory(context: interfaces.Context) {
    const { NavigationServiceReactRouter } = await import(
      "./NavigationServiceReactRouter.ts"
    );

    const navigate = context.container.get<NavigateFunction>(
      Token.REACT_ROUTER_NAVIGATE,
    );

    return NavigationServiceReactRouter.create(navigate);
  },
};
