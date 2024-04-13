import { Token } from "./Token.ts";

export const TokenRepositoryProvider = {
  token: Token.TOKEN_REPOSITORY,
  async useFactory() {
    const { TokenRepositoryLocalStorage } = await import(
      "./TokenRepositoryLocalStorage"
    );

    return new TokenRepositoryLocalStorage();
  },
};
