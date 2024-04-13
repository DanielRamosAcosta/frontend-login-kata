import { AuthService } from "./AuthService.ts";
import { TokenRepository } from "./TokenRepository.ts";
import { NavigationService } from "./NavigationService.ts";

export class LoginUseCase {
  constructor(
    private authService: AuthService,
    private tokenRepository: TokenRepository,
    private navigation: NavigationService,
  ) {}

  async execute(email: string, password: string) {
    const payload = await this.authService.login(email, password);

    this.tokenRepository.saveToken(payload.jwt);

    this.navigation.navigateToRecipes();
  }
}
