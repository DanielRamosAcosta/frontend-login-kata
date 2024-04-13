import { TokenRepository } from "./TokenRepository.ts";

export class TokenRepositoryLocalStorage implements TokenRepository {
  saveToken(jwt: string) {
    localStorage.setItem("token", jwt);
  }

  getTokenOrFail(): string {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("jwt not found");
    }

    return token;
  }
}
