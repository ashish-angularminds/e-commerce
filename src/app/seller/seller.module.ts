import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { SellersOrdersComponent } from './sellers-orders/sellers-orders.component';
import { HomeModule } from "../home/home.module";


@NgModule({
    declarations: [
        SellerComponent,
        SellersOrdersComponent,
    ],
    imports: [
        CommonModule,
        SellerRoutingModule,
        HomeModule
    ]
})
export class SellerModule { }
