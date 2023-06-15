import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShopComponent,
    ListOfProductsComponent,
    SingleProductComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ImageCropperModule,
    NgxDropzoneModule,
    FormsModule
  ]
})
export class ShopModule { }
