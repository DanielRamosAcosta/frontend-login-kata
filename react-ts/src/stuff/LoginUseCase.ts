import { AuthService } from "./AuthService.ts";
import { TokenRepository } from "./TokenRepository.ts";
import { NavigationService } from "./NavigationService.ts";

export const loginUseCase =
  (
    authService: AuthService,
    tokenRepository: TokenRepository,
    navigation: NavigationService,
  ) =>
  async (email: string, password: string) => {
    const payload = await authService.login(email, password);

    tokenRepository.saveToken(payload.jwt);

    navigation.navigateToRecipes();
  };

export type LoginUseCase = ReturnType<typeof loginUseCase>;