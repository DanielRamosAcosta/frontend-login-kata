import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login.jsx";
import { Recipes } from "../pages/Recipes.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
