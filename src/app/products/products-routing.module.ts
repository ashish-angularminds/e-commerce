import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { OneProductComponent } from './one-product/one-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full'
  },
  {
    path: 'products-list',
    component: ProductsListComponent
  },
  {
    path: 'one-product',
    component: OneProductComponent
  },
  {
    path: 'create-product',
    component: CreateProductComponent
  },
  {
    path: 'update-product',
    component: UpdateProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
