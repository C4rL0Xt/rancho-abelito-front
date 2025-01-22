import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CarritoPanelComponent } from './components/carrito-panel/carrito-panel.component';


@NgModule({
  declarations: [
    CarritoPanelComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  exports: [
    CarritoPanelComponent
  ]
})
export class OrderModule { }
