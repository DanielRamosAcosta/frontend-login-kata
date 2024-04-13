import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Token } from "./stuff/Token.ts";
import { routes } from "./navigation/routes.ts";
import { DependenciesContext } from "./injection/DependenciesContext.ts";
import { createContainer } from "./injection/createContainer.ts";

const router = createBrowserRouter(routes);

const container = createContainer();

container.bind(Token.REACT_ROUTER_NAVIGATE).toConstantValue(router.navigate);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DependenciesContext.Provider value={container}>
      <RouterProvider router={router} />
    </DependenciesContext.Provider>
  </React.StrictMode>,
);
