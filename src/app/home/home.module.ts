import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DummyComponent } from './dummy/dummy.component';
import { DescriptionPipe } from '../pipe/description.pipe';


@NgModule({
  declarations: [
    DummyComponent,
    DescriptionPipe
  ],
  exports: [DescriptionPipe],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
