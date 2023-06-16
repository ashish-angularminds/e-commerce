import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { OneProductComponent } from './one-product/one-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxEditorModule } from 'ngx-editor';
import { DescriptionPipe } from 'src/app/pipe/description.pipe';
import { HomeModule } from 'src/app/home/home.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    OneProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    NgxDropzoneModule,
    NgxEditorModule,
    HomeModule
  ],
})
export class ProductsModule { }
