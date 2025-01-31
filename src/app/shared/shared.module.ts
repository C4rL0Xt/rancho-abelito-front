import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AccountComponent } from './components/account/account.component';
import { RouterModule } from '@angular/router';
import{AuthModule} from '../modules/auth/auth.module'
import { OrderModule } from '../modules/order/order.module';
import { AccessDeniedComponent } from './components/access-denied/access-denied/access-denied.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AccountComponent,
    AccessDeniedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
    OrderModule
  ],
  exports: [
    HeaderComponent,
    AccountComponent
  ]
})
export class SharedModule {}
