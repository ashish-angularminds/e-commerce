import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { ShopComponent } from './shop.component';
import { CustomerGuard } from './guards/customer.guard';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '', component: ShopComponent,
    children: [
      { path: '', component: ListOfProductsComponent },
      { path: 'profile', component: CustomerProfileComponent, canActivate: [CustomerGuard] },
      { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
      { path: 'orders', component: OrdersComponent, canActivate: [CustomerGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
