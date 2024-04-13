import { Recipe } from "../domain/Recipe.ts";
import { RecipeRepository } from "./RecipeRepository.ts";
import { TokenRepository } from "./TokenRepository.ts";

export class RecipeRepositoryFetch implements RecipeRepository {
  constructor(private readonly tokenRepository: TokenRepository) {}

  async getRecipes(): Promise<Recipe[]> {
    const response = await fetch(
      "https://backend-login-placeholder.deno.dev/api/recepies",
      {
        headers: {
          Authorization: `Bearer ${this.tokenRepository.getTokenOrFail()}`,
        },
      },
    );

    const data = await response.json();

    if (data.status === "error") {
      throw new Error(data.code);
    }

    return data.payload;
  }
}
