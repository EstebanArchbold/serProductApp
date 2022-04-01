import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { CartComponent } from '../../components/cart/cart.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductListComponent,
    ProductCardComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
