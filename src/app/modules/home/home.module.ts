import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from "../../shared/shared.module";
import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  declarations: [
    HomePageComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
]
})
export class HomeModule { }
