import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'recipes',
    component: RecipesComponent,
  },
];
