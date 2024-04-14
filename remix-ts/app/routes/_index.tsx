import {
  json,
  LoaderFunctionArgs,
  MetaFunction,
  redirect,
} from "@remix-run/node";
import { getSession } from "~/sessions";
import { useLoaderData } from "@remix-run/react";
import { RecipeCard } from "~/components/RecipeCard";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("userId")) {
    return redirect("/login");
  }

  const response = await fetch(
    "https://backend-login-placeholder.deno.dev/api/recepies",
    {
      headers: {
        api_token:
          "26df07b5b7318455b8ca09f923eaae6de6eb95530743eddcfdb541df9487df9d",
      },
    },
  );

  const data = await response.json();

  if (data.status === "error") {
    throw new Error(data.code);
  }

  return json({ recipes: data.payload });
}

export default function Index() {
  const { recipes } = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Recipes</h1>
      {recipes.map((recipe: any) => (
        <RecipeCard
          name={recipe.name}
          ingredients={recipe.ingredients}
          key={recipe.id}
        />
      ))}
    </div>
  );
}
