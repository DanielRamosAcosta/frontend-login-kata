import { NavigateFunction } from "react-router-dom";
import { Router } from "../domain/Router.ts";

export class RouterReactRouter implements Router {
  private navigation: NavigateFunction;

  constructor(navigation: NavigateFunction) {
    this.navigation = navigation;
  }

  goToRecipes(): void {
    this.navigation("/recipes");
  }
}
