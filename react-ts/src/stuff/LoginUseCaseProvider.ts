import { type AuthService } from "./AuthService.ts";
import { type TokenRepository } from "./TokenRepository.ts";
import { type NavigationService } from "./NavigationService.ts";
import { type interfaces } from "inversify";

export const loginUseCaseProvider2 = async ({
  container,
}: interfaces.Context) => {
  const [tokenRepository, authService, navigationService, loginUseCase] =
    await Promise.all([
      container.getAsync<TokenRepository>("TokenRepository"),
      container.getAsync<AuthService>("AuthService"),
      container.getAsync<NavigationService>("NavigationService"),
      import("./LoginUseCase.ts").then((i) => i.loginUseCase),
    ]);

  return loginUseCase(authService, tokenRepository, navigationService);
};
