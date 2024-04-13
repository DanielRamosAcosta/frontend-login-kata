import { NavigateFunction } from "react-router-dom";
import { NavigationService } from "./NavigationService.ts";

export const create = (navigate: NavigateFunction): NavigationService => ({
  navigateToRecipes: () => navigate("/recipes"),
});

export const NavigationServiceReactRouter = { create };
