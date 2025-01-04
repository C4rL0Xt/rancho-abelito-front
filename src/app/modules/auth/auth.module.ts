import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';


@NgModule({
  declarations: [
    AuthPageComponent,
    RegisterFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    AuthPageComponent
  ]
})
export class AuthModule { }
