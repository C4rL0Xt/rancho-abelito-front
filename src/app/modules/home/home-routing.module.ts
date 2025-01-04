import { ProductsModule } from './../products/products.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: LandingPageComponent 
  }, {
    path: 'carta',
    loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
