import { Token } from "./Token.ts";

export const AuthServiceProvider = {
  token: Token.AUTH_SERVICE,
  async useFactory() {
    const { AuthServiceFetch } = await import("./AuthServiceFetch.ts");

    return new AuthServiceFetch();
  },
};
