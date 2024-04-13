import { TokenRepository } from "./TokenRepository.ts";

const create = (): TokenRepository => ({
  saveToken(jwt: string) {
    localStorage.setItem("token", jwt);
  },
  getTokenOrFail(): string {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("jwt not found");
    }

    return token;
  },
});

export const TokenRepositoryLocalStorage = {
  create,
};
