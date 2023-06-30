import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionPipe } from '../pipe/description.pipe';
import { CustomeCurrencyPipe } from '../pipe/custome-currency.pipe';
import { TestComponent } from './test.component';



@NgModule({
  declarations: [DescriptionPipe, CustomeCurrencyPipe, TestComponent],
  imports: [
    CommonModule
  ],
  exports: [DescriptionPipe, CustomeCurrencyPipe]
})
export class SharedmoduleModule { }
