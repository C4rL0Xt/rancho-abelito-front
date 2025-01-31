import { ProductsModule } from './../products/products.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { roleGuard } from '../../core/guards/role.guard';

const routes: Routes = [
  { 
    path: '', 
    component: LandingPageComponent 
  }, {
    path: 'carta',
    loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
  }, 
  {
    path: 'order',
    loadChildren: () => import('../order/order.module').then(m => m.OrderModule),
      /*canActivate:[roleGuard],
      data: { expectedRole: 'ROLE_MESERO' }*/
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
