import { createBrowserRouter, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    lazy: async () => {
      const { Login } = await import("../pages/Login.tsx");

      return { Component: Login };
    },
  },
  {
    path: "/recipes",
    lazy: async () => {
      const { Recipes } = await import("../pages/Recipes.tsx");

      return { Component: Recipes };
    },
  },
];

export const router = createBrowserRouter(routes);
