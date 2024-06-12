import { NavigateFunction } from "react-router-dom";
import { RouterService } from "./RouterService.ts";

export class RouterServiceReactRouter implements RouterService {
  private readonly navigate: NavigateFunction;

  constructor(navigate: NavigateFunction) {
    this.navigate = navigate;
  }

  goToRecipes(): void {
    this.navigate("/recipes");
  }
}
