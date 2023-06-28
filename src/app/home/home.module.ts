import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DummyComponent } from './dummy/dummy.component';
import { DescriptionPipe } from '../pipe/description.pipe';
import { CustomeCurrencyPipe } from '../pipe/custome-currency.pipe';


@NgModule({
  declarations: [
    DummyComponent,
    DescriptionPipe,
    CustomeCurrencyPipe
  ],
  exports: [DescriptionPipe, CustomeCurrencyPipe],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
