import { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    lazy: async () => {
      console.log("importing login");

      const { Login } = await import("../pages/Login.tsx");

      return { Component: Login };
    },
  },
  {
    path: "/recipes",
    lazy: async () => {
      console.log("importing recipes");
      const { Recipes } = await import("../pages/Recipes.tsx");

      return { Component: Recipes };
    },
  },
];
