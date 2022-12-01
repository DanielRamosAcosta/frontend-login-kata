import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SignUp } from "../pages/SignUp.jsx";
import { SignUpSuccess } from "../pages/SignUpSuccess.jsx";
import { createDependenciesReal } from "../factories/CreateDependenciesReal.js";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const { authService, routerService } = createDependenciesReal({ navigate });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <SignUp authService={authService} routerService={routerService} />
        }
      />
      <Route path="/success" element={<SignUpSuccess />} />
    </Routes>
  );
};
