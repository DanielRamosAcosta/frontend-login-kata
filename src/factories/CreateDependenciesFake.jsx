import { createDependencies } from "./CreateDependencies.jsx";
import { AuthServiceFake } from "../services/AuthServiceFake.js";
import { RouterServiceFake } from "../services/RouterServiceFake.js";

export function createDependenciesFake() {
  return createDependencies({
    authService: new AuthServiceFake(),
    routerService: new RouterServiceFake(),
  });
}
