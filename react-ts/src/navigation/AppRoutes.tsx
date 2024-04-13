import { Route, Routes, useNavigate } from "react-router-dom";
import { Container } from "inversify";
import { DependenciesContext } from "../injection/DependenciesContext.ts";
import { Login } from "../pages/Login.tsx";
import { Recipes } from "../pages/Recipes.tsx";
import { LoginUseCase } from "../stuff/LoginUseCase.ts";
import { AuthService } from "../stuff/AuthService.ts";
import { NavigationService } from "../stuff/NavigationService.ts";
import { TokenRepository } from "../stuff/TokenRepository.ts";
import { navigationServiceReactRouterProvider2 } from "../stuff/NavigationServiceReactRouterProvider.ts";
import { tokenRepositoryLocalStorageProvider2 } from "../stuff/TokenRepositoryLocalStorageProvider.ts";
import { authServiceProvider } from "../stuff/AuthServiceFetchProvider.ts";
import { loginUseCaseProvider2 } from "../stuff/LoginUseCaseProvider.ts";

export const AppRoutes = () => {
  const navigate = useNavigate();

  const container = new Container();

  container.bind("ReactRouterNavigate").toConstantValue(navigate);

  container
    .bind<TokenRepository>("TokenRepository")
    .toDynamicValue(tokenRepositoryLocalStorageProvider2);

  container
    .bind<AuthService>("AuthService")
    .toDynamicValue(authServiceProvider);

  container
    .bind<NavigationService>("NavigationService")
    .toDynamicValue(navigationServiceReactRouterProvider2);

  container
    .bind<LoginUseCase>("LoginUseCase")
    .toDynamicValue(loginUseCaseProvider2);

  return (
    <DependenciesContext.Provider value={container}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </DependenciesContext.Provider>
  );
};
