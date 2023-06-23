import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { PricesComponent } from './prices/prices.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { Store, StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    CartComponent,
    PricesComponent,
    CartListComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule,
    StoreModule.forFeature('cart', cartReducer),
    FormsModule
  ]
})
export class CartModule { }
