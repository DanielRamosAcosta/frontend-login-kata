import { Recipe } from "../domain/Recipe.ts";

export interface RecipeRepository {
  getRecipes(): Promise<Recipe[]>;
}
