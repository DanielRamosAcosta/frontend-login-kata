import { type AuthService } from "./AuthService.ts";
import { type TokenRepository } from "./TokenRepository.ts";
import { type NavigationService } from "./NavigationService.ts";
import { type interfaces } from "inversify";
import { type Provider } from "./Provider.ts";

export const loginUseCaseProvider =
  ({ container }: interfaces.Context) =>
  async () => {
    const authServiceProvider = container.get<Provider<AuthService>>(
      "AuthServiceProvider",
    );
    const tokenRepositoryProvider = container.get<Provider<TokenRepository>>(
      "TokenRepositoryProvider",
    );
    const navigationServiceProvider = container.get<
      Provider<NavigationService>
    >("NavigationServiceProvider");

    const [authService, tokenRepository, navigation, { loginUseCase }] =
      await Promise.all([
        authServiceProvider(),
        tokenRepositoryProvider(),
        navigationServiceProvider(),
        import("./LoginUseCase.ts"),
      ]);

    return loginUseCase(authService, tokenRepository, navigation);
  };
