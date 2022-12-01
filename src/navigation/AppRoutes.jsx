import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SignUp } from "../pages/SignUp.jsx";
import { SignUpSuccess } from "../pages/SignUpSuccess.jsx";
import { AuthServiceApi } from "../services/AuthServiceApi.js";
import { RouterServiceReactRouter } from "../services/RouterServiceReactRouter.js";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const authService = new AuthServiceApi();
  const routerService = new RouterServiceReactRouter(navigate);

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
