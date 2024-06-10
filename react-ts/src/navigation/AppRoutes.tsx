import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { AuthService } from "../AuthService.ts";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const authService = new AuthService();

  return (
    <Routes>
      <Route
        path="/"
        element={<Login navigate={navigate} authService={authService} />}
      />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
