import { TokenRepository } from "./TokenRepository.ts";

export class TokenRepositoryLocalStorage implements TokenRepository {
  save(token: string): void {
    localStorage.setItem("token", token);
  }

  find(): string | null {
    return localStorage.getItem("token");
  }
}
