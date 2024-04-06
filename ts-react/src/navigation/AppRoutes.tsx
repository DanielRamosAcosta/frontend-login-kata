import { Route, Routes } from "react-router-dom";
import { SignUp } from "../pages/SignUp";
import { Recipes } from "../pages/Recipes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
