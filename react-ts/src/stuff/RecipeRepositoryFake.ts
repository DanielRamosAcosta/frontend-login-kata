import { Recipe } from "../domain/Recipe.ts";
import { RecipeRepository } from "./RecipeRepository.ts";
import { TokenRepository } from "./TokenRepository.ts";

export class RecipeRepositoryFake implements RecipeRepository {
  constructor() {}

  async getRecipes(): Promise<Recipe[]> {
    return [
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
    ];
  }
}
