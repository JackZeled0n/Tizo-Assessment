import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from '../product/components/product/product.component';
import { UserComponent } from '../user/components/user/user.component';
import { CategoryComponent } from '../category/components/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'product', pathMatch: 'full',
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
