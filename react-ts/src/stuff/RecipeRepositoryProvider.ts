import { interfaces } from "inversify";
import { Token } from "./Token.ts";
import { TokenRepository } from "./TokenRepository.ts";

export const RecipeRepositoryProvider = {
  token: Token.RECIPE_REPOSITORY,
  async useFactory({ container }: interfaces.Context) {
    const [tokenRepository, RecipeRepositoryFetch] = await Promise.all([
      container.getAsync<TokenRepository>(Token.TOKEN_REPOSITORY),
      import("./RecipeRepositoryFetch.ts").then((i) => i.RecipeRepositoryFetch),
    ]);

    return new RecipeRepositoryFetch(tokenRepository);
  },
};
