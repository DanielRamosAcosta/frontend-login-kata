import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "../pages/SignUp.jsx";
import { SignUpSuccess } from "../pages/SignUpSuccess.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/success" element={<SignUpSuccess />} />
    </Routes>
  );
};
