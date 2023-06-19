import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

const routes: Routes = [
  { path: '', component: ListOfProductsComponent },
  { path: 'registration', component: CustomerRegistrationComponent },
  { path: 'login', component: CustomerLoginComponent },
  { path: 'profile', component: CustomerProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
