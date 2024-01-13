import { Routes } from '@angular/router';
import { canActivateLogin } from './modules/authentication/login.guard';
import { canActivateDashboard } from './modules/authentication/dashboard.guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [canActivateLogin],
        loadChildren: () =>
            import('./modules/authentication/authentication.module').then((m) => m.AuthenticationModule),
    },
    {
        path: 'dashboard',
        canActivate: [canActivateDashboard],
        loadChildren: () =>
            import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
];
