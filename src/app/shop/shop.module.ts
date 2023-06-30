import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FormsModule } from '@angular/forms';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart/store/cart.reducer';
import { OrdersComponent } from './orders/orders.component';
import { DealDirective } from '../directives/deal.directive';
import { SharedmoduleModule } from '../sharedmodule/sharedmodule.module';


@NgModule({
  declarations: [
    ShopComponent,
    ListOfProductsComponent,
    SingleProductComponent,
    CustomerRegistrationComponent,
    CustomerLoginComponent,
    CustomerProfileComponent,
    OrdersComponent,
    DealDirective
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ImageCropperModule,
    NgxDropzoneModule,
    FormsModule,
    StoreModule.forFeature('cart', cartReducer),
    SharedmoduleModule
  ]
})
export class ShopModule { }
