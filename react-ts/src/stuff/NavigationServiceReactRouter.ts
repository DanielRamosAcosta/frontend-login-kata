import { NavigateFunction } from "react-router-dom";
import { NavigationService } from "./NavigationService.ts";

export class NavigationServiceReactRouter implements NavigationService {
  constructor(private navigate: NavigateFunction) {}

  navigateToRecipes() {
    this.navigate("/recipes");
  }
}
