import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        path: 'user',
        loadChildren: () =>
            import('./modules/user/user.module').then((m) => m.UserModule),
    },
    {
        path: 'product',
        loadChildren: () =>
            import('./modules/product/product.module').then((m) => m.ProductModule),
    },
    {
        path: 'category',
        loadChildren: () =>
            import('./modules/category/category.module').then((m) => m.CategoryModule),
    },
];
