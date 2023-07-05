import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionPipe } from '../pipe/description.pipe';
import { CustomeCurrencyPipe } from '../pipe/custome-currency.pipe';
import { TestComponent } from './test.component';
import { DealDirective } from '../directives/deal.directive';



@NgModule({
  declarations: [
    DescriptionPipe,
    CustomeCurrencyPipe,
    DealDirective,
    TestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DescriptionPipe, CustomeCurrencyPipe, DealDirective]
})
export class SharedmoduleModule { }
