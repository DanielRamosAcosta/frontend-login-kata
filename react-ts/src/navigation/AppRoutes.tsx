import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { loginUseCase } from "../sutff/LoginUseCase.ts";
import { AuthServiceFetch } from "../sutff/AuthServiceFetch.ts";
import { NavigationServiceReactRouter } from "../sutff/NavigationServiceReactRouter.ts";
import { TokenRepositoryLocalStorage } from "../sutff/TokenRepositoryLocalStorage.ts";

export const AppRoutes = () => {
  const navigate = useNavigate();

  const login = loginUseCase(
    AuthServiceFetch.create(),
    TokenRepositoryLocalStorage.create(),
    NavigationServiceReactRouter.create(navigate),
  );

  return (
    <Routes>
      <Route path="/" element={<Login login={login} />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>
  );
};
