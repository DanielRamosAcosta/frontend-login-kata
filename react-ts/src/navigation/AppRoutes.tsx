import { Route, Routes, useNavigate } from "react-router-dom";
import { Container } from "inversify";
import { DependenciesContext } from "../injection/DependenciesContext.ts";
import { Login } from "../pages/Login.tsx";
import { Recipes } from "../pages/Recipes.tsx";
import { LoginUseCase } from "../stuff/LoginUseCase.ts";
import { AuthService } from "../stuff/AuthService.ts";
import { NavigationService } from "../stuff/NavigationService.ts";
import { TokenRepository } from "../stuff/TokenRepository.ts";
import { navigationServiceReactRouterProvider } from "../stuff/NavigationServiceReactRouterProvider.ts";
import { tokenRepositoryLocalStorageProvider } from "../stuff/TokenRepositoryLocalStorageProvider.ts";
import { authServiceProvider } from "../stuff/AuthServiceFetchProvider.ts";
import { loginUseCaseProvider } from "../stuff/LoginUseCaseProvider.ts";

type AuthServiceProvider = () => Promise<AuthService>;
type TokenRepositoryProvider = () => Promise<TokenRepository>;
type NavigationServiceProvider = () => Promise<NavigationService>;
type LoginUseCaseProvider = () => Promise<LoginUseCase>;

export const AppRoutes = () => {
  const navigate = useNavigate();

  const container = new Container();

  container.bind("ReactRouterNavigate").toConstantValue(navigate);

  container
    .bind<AuthServiceProvider>("AuthServiceProvider")
    .toProvider<AuthService>(authServiceProvider);

  container
    .bind<TokenRepositoryProvider>("TokenRepositoryProvider")
    .toProvider<TokenRepository>(tokenRepositoryLocalStorageProvider);

  container
    .bind<NavigationServiceProvider>("NavigationServiceProvider")
    .toProvider<NavigationService>(navigationServiceReactRouterProvider);

  container
    .bind<LoginUseCaseProvider>("LoginUseCaseProvider")
    .toProvider<LoginUseCase>(loginUseCaseProvider);

  return (
    <DependenciesContext.Provider value={container}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </DependenciesContext.Provider>
  );
};
