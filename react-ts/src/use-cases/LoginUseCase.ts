import { AuthService } from "../domain/AuthService.ts";
import { TokenRepository } from "../domain/TokenRepository.ts";
import { Router } from "../domain/Router.ts";

export class LoginUseCase {
  constructor(
    private authService: AuthService,
    private tokenRepository: TokenRepository,
    private router: Router,
  ) {}

  async execute(email: string, password: string): Promise<void> {
    const token = await this.authService.login(email, password);
    this.tokenRepository.save(token);
    this.router.goToRecipes();
  }
}
