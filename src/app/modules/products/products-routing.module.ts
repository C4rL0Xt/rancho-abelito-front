import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaPageComponent } from './pages/carta-page/carta-page.component';

const routes: Routes = [
  { path: '', component: CartaPageComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
