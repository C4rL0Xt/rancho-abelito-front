import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CarritoPanelComponent } from './components/carrito-panel/carrito-panel.component';
import { MeseroPageComponent } from './pages/mesero-page/mesero-page.component';
import { MesaCardComponent } from './components/mesa-card/mesa-card.component';
import { CreateOrderComponent } from './components/create-order/create-order/create-order.component';
import { OrderPageComponent } from './pages/order-page/order-page/order-page.component';
import { FormsModule } from '@angular/forms';
import { OrdenEstadoComponent } from './components/orden-estado/orden-estado.component';


@NgModule({
  declarations: [
    CarritoPanelComponent,
    MeseroPageComponent,
    MesaCardComponent,
    CreateOrderComponent,
    OrderPageComponent,
    OrdenEstadoComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule
  ],
  exports: [
    CarritoPanelComponent
  ]
})
export class OrderModule { }
