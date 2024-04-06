import "./RecipeCard.css";

export const RecipeCard = ({ name, ingredients }) => {
  return (
    <div className="recipe-card">
      <h2 className="recipe-card-title">{name}</h2>
      <ul className="recipe-card-ingredients">
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};
