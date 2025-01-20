import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { CartaPageComponent } from './pages/carta-page/carta-page.component';

import { CardTypeComponent } from './components/card-type/card-type.component';
import { SharedModule } from "../../shared/shared.module";
import { CategoriaPageComponent } from './pages/categoria-page/categoria-page.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProductDetailsPanelComponent } from './components/product-details-panel/product-details-panel.component';


@NgModule({
  declarations: [
    CartaPageComponent,

    CardTypeComponent,
      CategoriaPageComponent,
      CardProductComponent,
      ProductDetailsPanelComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule
]
})
export class ProductsModule { }
