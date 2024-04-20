import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n.ts";
import "./reset.css";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./navigation/routes.ts";
import { DependenciesProvider } from "./injection/DependenciesProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DependenciesProvider>
      <RouterProvider router={router} />
    </DependenciesProvider>
  </React.StrictMode>,
);
