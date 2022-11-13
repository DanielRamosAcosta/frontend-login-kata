import { createDependencies } from "./CreateDependencies.jsx";
import { AuthServiceApi } from "../services/AuthServiceApi.js";
import { RouterServiceReactRouter } from "../services/RouterServiceReactRouter.js";

export function createDependenciesReal({ navigate }) {
  return createDependencies({
    authService: new AuthServiceApi(),
    routerService: new RouterServiceReactRouter(navigate),
  });
}
