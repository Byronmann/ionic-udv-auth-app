import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
    canActivate: [authGuard],
    children: [
      {
        path: 'perfil',
        loadComponent: () =>
          import('./pages/perfil/perfil.page').then((m) => m.PerfilPage),
      },
    
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
