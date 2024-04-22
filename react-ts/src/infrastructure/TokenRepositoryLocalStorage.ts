import { TokenRepository } from "../domain/TokenRepository.ts";

export class TokenRepositoryLocalStorage implements TokenRepository {
  save(token: string): void {
    localStorage.setItem("token", token);
  }
}
