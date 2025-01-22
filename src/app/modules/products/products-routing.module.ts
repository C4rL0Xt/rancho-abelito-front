import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaPageComponent } from './pages/carta-page/carta-page.component';
import { CategoriaPageComponent } from './pages/categoria-page/categoria-page.component';

const routes: Routes = [
  { path: '', component: CartaPageComponent },
  { path: 'categoria/:idCategoria', component: CategoriaPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
