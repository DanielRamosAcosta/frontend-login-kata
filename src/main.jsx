import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import { DependenciesProvider } from "./dependencies/Dependencies.jsx";
import { AppRoutes } from "./navigation/AppRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DependenciesProvider>
        <AppRoutes />
      </DependenciesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
