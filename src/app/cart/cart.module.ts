import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { PricesComponent } from './prices/prices.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { Store, StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartComponent,
    PricesComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    StoreModule.forFeature('cart', cartReducer)
  ]
})
export class CartModule { }
