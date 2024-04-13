import { createContainer } from "./createContainer.ts";
import { AuthServiceFake } from "../stuff/AuthServiceFake.ts";
import { NavigationServiceDummy } from "../stuff/NavigationServiceDummy.ts";
import { RecipeRepositoryFake } from "../stuff/RecipeRepositoryFake.ts";
import { TokenRepositoryFake } from "../stuff/TokenRepositoryFake.ts";

export function createFakeContainer() {
  const authService = new AuthServiceFake();
  const navigationService = new NavigationServiceDummy();
  const recipeRepository = new RecipeRepositoryFake();
  const tokenRepository = new TokenRepositoryFake();

  return {
    container: createContainer({
      authService: () => authService,
      navigationService: () => navigationService,
      recipeRepository: () => recipeRepository,
      tokenRepository: () => tokenRepository,
    }),
    authService,
    navigationService,
    recipeRepository,
    tokenRepository,
  };
}
