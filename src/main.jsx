import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp.jsx";
import { SignUpSuccess } from "./pages/SignUpSuccess";
import { DependenciesProvider } from "./dependencies/Dependencies.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DependenciesProvider>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/success" element={<SignUpSuccess />} />
        </Routes>
      </DependenciesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
