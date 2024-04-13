import { Recipe } from "../domain/Recipe.ts";
import { RecipeRepository } from "./RecipeRepository.ts";

const create = (): RecipeRepository => ({
  async getRecipes(): Promise<Recipe[]> {
    const response = await fetch(
      "https://backend-login-placeholder.deno.dev/api/recepies",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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

