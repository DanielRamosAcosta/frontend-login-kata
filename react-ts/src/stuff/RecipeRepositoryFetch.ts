import { Recipe } from "../domain/Recipe.ts";
import { RecipeRepository } from "./RecipeRepository.ts";
import { TokenRepository } from "./TokenRepository.ts";

const create = (tokenRepository: TokenRepository): RecipeRepository => ({
  async getRecipes(): Promise<Recipe[]> {
    const response = await fetch(
      "https://backend-login-placeholder.deno.dev/api/recepies",
      {
        headers: {
          Authorization: `Bearer ${tokenRepository.getTokenOrFail()}`,
        },
      },
    );

    const data = await response.json();

    if (data.status === "error") {
      throw new Error(data.code);
    }

    return data.payload;
  },
});

export const RecipeRepositoryFetch = {
  create,
};
