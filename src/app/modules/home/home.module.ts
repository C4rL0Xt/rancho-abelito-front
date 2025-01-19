import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from "../../shared/shared.module";
import { LandingComponent } from './components/landing/landing.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LocalsComponent } from './components/locals/locals.component';
import { LocalsCardComponent } from './components/locals-card/locals-card.component';
import { ProductsModule } from '../products/products.module';


@NgModule({
  declarations: [
    HomePageComponent,
    LandingComponent,
    LandingPageComponent,
    LocalsComponent,
    LocalsCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ProductsModule
  ]
})
export class HomeModule { }
