import { Routes } from '@angular/router';
import { canActivateLogin } from './modules/authentication/login.guard';
import { canActivateDashboard } from './modules/authentication/dashboard.guard';
import { LoginComponent } from './modules/authentication/components/login/login.component';

export const routes: Routes = [
//   { path: '**', component: LoginComponent },
  {
    path: '',
    canActivate: [canActivateLogin],
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'dashboard',
    canActivate: [canActivateDashboard],
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];
