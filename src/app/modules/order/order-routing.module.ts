import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeseroPageComponent } from './pages/mesero-page/mesero-page.component';
import { OrderPageComponent } from './pages/order-page/order-page/order-page.component';
import { CreateOrderComponent } from './components/create-order/create-order/create-order.component';

const routes: Routes = [
  {
    path: '',
    component: OrderPageComponent,
    children:[
      {
        path:'',
        redirectTo: 'mesas',
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CreateOrderComponent
      },{
        path: 'mesas',
        component: MeseroPageComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
