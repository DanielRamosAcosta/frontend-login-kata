import { Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { Recipes } from "../pages/Recipes";
import { LoginUseCase } from "../use-cases/LoginUseCase.ts";
import { AuthServiceApi } from "../infrastructure/AuthServiceApi.ts";
import { TokenRepositoryLocalStorage } from "../infrastructure/TokenRepositoryLocalStorage.ts";
import { RouterReactRouter } from "../infrastructure/RouterReactRouter.ts";
import { Dependencies, DependenciesContext } from "../DependenciesContext.tsx";

export const AppRoutes = () => {
  const navigate = useNavigate();

  const authService = new AuthServiceApi();
  const tokenRepository = new TokenRepositoryLocalStorage();
  const router = new RouterReactRouter(navigate);
  const loginUseCase = new LoginUseCase(authService, tokenRepository, router);

  const dependencies: Dependencies = { loginUseCase };

  return (
    <DependenciesContext.Provider value={dependencies}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </DependenciesContext.Provider>
  );
};
