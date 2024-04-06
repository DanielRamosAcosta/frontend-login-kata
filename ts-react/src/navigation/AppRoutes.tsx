import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
