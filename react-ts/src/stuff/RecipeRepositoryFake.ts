import { Recipe } from "../domain/Recipe.ts";
import { RecipeRepository } from "./RecipeRepository.ts";
import { TokenRepository } from "./TokenRepository.ts";

export class RecipeRepositoryFake implements RecipeRepository {
  private recipes: Recipe[];

  public static with(recipe: Recipe) {
    return new RecipeRepositoryFake([recipe]);
  }

  public static empty() {
    return new RecipeRepositoryFake([]);
  }

  constructor(
    recipes = [
      {
        id: "1",
        name: "Pancakes",
        ingredients: ["flour", "milk", "eggs"],
      },
      {
        id: "2",
        name: "Waffles",
        ingredients: ["flour", "milk", "eggs"],
      },
    ],
  ) {
    this.recipes = recipes;
  }

  async getRecipes(): Promise<Recipe[]> {
    return this.recipes;
  }
}
