import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "inversify";
import { Token } from "./stuff/Token.ts";
import { routes } from "./navigation/routes.ts";
import { TokenRepositoryProvider } from "./stuff/TokenRepositoryProvider.ts";
import { AuthServiceProvider } from "./stuff/AuthServiceFetchProvider.ts";
import { NavigationServiceProvider } from "./stuff/NavigationServiceProvider.ts";
import { LoginUseCaseProvider } from "./stuff/LoginUseCaseProvider.ts";
import { DependenciesContext } from "./injection/DependenciesContext.ts";
import { RecipeRepositoryProvider } from "./stuff/RecipeRepositoryProvider.ts";

const router = createBrowserRouter(routes);

const container = new Container();

container
  .bind(AuthServiceProvider.token)
  .toDynamicValue(AuthServiceProvider.useFactory);

container
  .bind(NavigationServiceProvider.token)
  .toDynamicValue(NavigationServiceProvider.useFactory);

container
  .bind(LoginUseCaseProvider.token)
  .toDynamicValue(LoginUseCaseProvider.useFactory);

container
  .bind(RecipeRepositoryProvider.token)
  .toDynamicValue(RecipeRepositoryProvider.useFactory);

container
  .bind(TokenRepositoryProvider.token)
  .toDynamicValue(TokenRepositoryProvider.useFactory);

container.bind(Token.REACT_ROUTER_NAVIGATE).toConstantValue(router.navigate);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DependenciesContext.Provider value={container}>
      <RouterProvider router={router} />
    </DependenciesContext.Provider>
  </React.StrictMode>,
);
