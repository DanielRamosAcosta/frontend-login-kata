import { Container, interfaces } from "inversify";
import { AuthServiceProvider } from "../stuff/AuthServiceProvider.ts";
import { NavigationServiceProvider } from "../stuff/NavigationServiceProvider.ts";
import { LoginUseCaseProvider } from "../stuff/LoginUseCaseProvider.ts";
import { RecipeRepositoryProvider } from "../stuff/RecipeRepositoryProvider.ts";
import { TokenRepositoryProvider } from "../stuff/TokenRepositoryProvider.ts";
import { AuthService } from "../stuff/AuthService.ts";
import { NavigationService } from "../stuff/NavigationService.ts";
import { RecipeRepository } from "../stuff/RecipeRepository.ts";
import { TokenRepository } from "../stuff/TokenRepository.ts";
import { TranslationServiceProvider } from "../stuff/TranslationServiceProvider.ts";
import { TranslationService } from "../stuff/TranslationService.ts";
import DynamicValue = interfaces.DynamicValue;

export function createContainer({
  authService = AuthServiceProvider.useFactory,
  navigationService = NavigationServiceProvider.useFactory,
  recipeRepository = RecipeRepositoryProvider.useFactory,
  tokenRepository = TokenRepositoryProvider.useFactory,
  translationService = TranslationServiceProvider.useFactory,
}: {
  authService?: DynamicValue<AuthService>;
  navigationService?: DynamicValue<NavigationService>;
  recipeRepository?: DynamicValue<RecipeRepository>;
  tokenRepository?: DynamicValue<TokenRepository>;
  translationService?: DynamicValue<TranslationService>;
} = {}) {
  const container = new Container({ defaultScope: "Singleton" });

  container.bind(AuthServiceProvider.token).toDynamicValue(authService);

  container
    .bind(NavigationServiceProvider.token)
    .toDynamicValue(navigationService);

  container
    .bind(LoginUseCaseProvider.token)
    .toDynamicValue(LoginUseCaseProvider.useFactory);

  container
    .bind(RecipeRepositoryProvider.token)
    .toDynamicValue(recipeRepository);

  container.bind(TokenRepositoryProvider.token).toDynamicValue(tokenRepository);

  container
    .bind(TranslationServiceProvider.token)
    .toDynamicValue(translationService);

  return container;
}
