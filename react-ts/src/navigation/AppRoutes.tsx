import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { AuthService } from "../services/AuthService.ts";

import { TokenRepositoryLocalStorage } from "../services/TokenRepositoryLocalStorage.ts";

import { RouterServiceReactRouter } from "../services/RouterServiceReactRouter.ts";
import { LoginUseCase } from "../services/LoginUseCase.ts";

export const AppRoutes = () => {
  const navigate = useNavigate();
  const authService = new AuthService();
  const tokenRepository = new TokenRepositoryLocalStorage();
  const routerService = new RouterServiceReactRouter(navigate);
  const loginUseCase = new LoginUseCase(
    authService,
    tokenRepository,
    routerService,
  );

  return (
    <Routes>
      <Route path="/" element={<Login loginUseCase={loginUseCase} />} />
      <Route
        path="/recipes"
        element={<Recipes tokenRepository={tokenRepository} />}
      />
    </Routes>
  );
};
