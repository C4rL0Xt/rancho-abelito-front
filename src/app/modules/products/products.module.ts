import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CartaPageComponent } from './pages/carta-page/carta-page.component';

import { CardTypeComponent } from './components/card-type/card-type.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    CartaPageComponent,

    CardTypeComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
]
})
export class ProductsModule { }
