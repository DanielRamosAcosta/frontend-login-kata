import { useEffect, useState } from "react";
import { Title } from "../components/Title";
import { RecipeCard } from "../components/RecipeCard";
import "./Recipes.css";
import { Recipe } from "../domain/Recipe.ts";
import { useDependencies } from "../injection/DependenciesContext.ts";
import { RecipeRepository } from "../stuff/RecipeRepository.ts";
import { Token } from "../stuff/Token.ts";

export const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const container = useDependencies();

  useEffect(() => {
    container
      .getAsync<RecipeRepository>(Token.RECIPE_REPOSITORY)
      .then((recipeRepository) => recipeRepository.getRecipes())
      .then((recipes) => {
        setRecipes(recipes);
      });
  }, []);

  return (
    <main className="recipes-page">
      <Title>Recipes</Title>
      <div className="recipes">
        {recipes.map((recipe) => (
          <RecipeCard
            name={recipe.name}
            ingredients={recipe.ingredients}
            key={recipe.id}
          />
        ))}
      </div>
    </main>
  );
};
