import { type AuthService } from "./AuthService.ts";
import { type TokenRepository } from "./TokenRepository.ts";
import { type NavigationService } from "./NavigationService.ts";
import { type interfaces } from "inversify";
import { Token } from "./Token.ts";

export const LoginUseCaseProvider = {
  token: Token.LOGIN_USE_CASE,
  async useFactory({ container }: interfaces.Context) {
    const [tokenRepository, authService, navigationService, LoginUseCase] =
      await Promise.all([
        container.getAsync<TokenRepository>(Token.TOKEN_REPOSITORY),
        container.getAsync<AuthService>(Token.AUTH_SERVICE),
        container.getAsync<NavigationService>(Token.NAVIGATOR),
        import("./LoginUseCase.ts").then((i) => i.LoginUseCase),
      ]);

    return new LoginUseCase(authService, tokenRepository, navigationService);
  },
};
