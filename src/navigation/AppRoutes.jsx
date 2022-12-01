import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { SignUp } from "../pages/SignUp.jsx";
import { SignUpSuccess } from "../pages/SignUpSuccess.jsx";
import { RouterServiceReactRouter } from "../services/RouterServiceReactRouter.js";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const routerService = new RouterServiceReactRouter(navigate);

  return (
    <Routes>
      <Route path="/" element={<SignUp routerService={routerService} />} />
      <Route path="/success" element={<SignUpSuccess />} />
    </Routes>
  );
};
