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
import { Token } from "../stuff/Token.ts";
import { ErrorHandlerSentry } from "../stuff/ErrorHandlerSentry.ts";
import { ErrorHandlerLog } from "../stuff/ErrorHandlerLog.ts";

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

  console.log("import.meta.env.PROD", import.meta.env.PROD);
  if (import.meta.env.PROD) {
    container
      .bind(Token.ERROR_HANDLER)
      .toConstantValue(new ErrorHandlerSentry());
  } else {
    container.bind(Token.ERROR_HANDLER).toConstantValue(new ErrorHandlerLog());
  }

  return container;
}
