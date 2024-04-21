import { createBrowserRouter, RouteObject } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { wrapWithBoundary } from "../errors/ErrorBoundary.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    lazy: async () => {
      const { Login } = await import("../pages/Login.tsx");

      return { Component: wrapWithBoundary(Login) };
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

const sentryCreateBrowserRouter =
  Sentry.wrapCreateBrowserRouter(createBrowserRouter);

export const router = sentryCreateBrowserRouter(routes);
