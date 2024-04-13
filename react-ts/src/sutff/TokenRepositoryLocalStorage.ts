import { TokenRepository } from "./TokenRepository.ts";

const create = (): TokenRepository => ({
  saveToken(jwt: string) {
    localStorage.setItem("token", jwt);
  },
});

export const TokenRepositoryLocalStorage = {
  create,
};
