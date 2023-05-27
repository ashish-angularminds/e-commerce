import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanysettingRoutingModule } from './companysetting-routing.module';
import { AdduserComponent } from './adduser/adduser.component';


@NgModule({
  declarations: [
    AdduserComponent
  ],
  imports: [
    CommonModule,
    CompanysettingRoutingModule
  ]
})
export class CompanysettingModule { }
