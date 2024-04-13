export const recipeRepositoryProvider = async () => {
  const { RecipeRepositoryFetch } = await import("./RecipeRepositoryFetch.ts");

  return RecipeRepositoryFetch.create();
};
