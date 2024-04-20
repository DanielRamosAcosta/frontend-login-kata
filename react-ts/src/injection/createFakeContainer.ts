import { createContainer } from "./createContainer.ts";
import { AuthServiceFake } from "../stuff/AuthServiceFake.ts";
import { NavigationServiceDummy } from "../stuff/NavigationServiceDummy.ts";
import { RecipeRepositoryFake } from "../stuff/RecipeRepositoryFake.ts";
import { TokenRepositoryFake } from "../stuff/TokenRepositoryFake.ts";
import { TranslationServiceFake } from "../stuff/TranslationServiceFake.ts";

export function createFakeContainer() {
  const authService = new AuthServiceFake();
  const navigationService = new NavigationServiceDummy();
  const recipeRepository = new RecipeRepositoryFake();
  const tokenRepository = new TokenRepositoryFake();
  const translationService = new TranslationServiceFake();

  return {
    container: createContainer({
      authService: () => authService,
      navigationService: () => navigationService,
      recipeRepository: () => recipeRepository,
      tokenRepository: () => tokenRepository,
      translationService: () => translationService,
    }),
    authService,
    navigationService,
    recipeRepository,
    tokenRepository,
    translationService,
  };
}
