import { NavigateFunction } from "react-router-dom";
import { NavigationService } from "./NavigationService.ts";

export class NavigationServiceDummy implements NavigationService {
  constructor() {}

  navigateToRecipes() {}
}
