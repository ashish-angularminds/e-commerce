import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing.module';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CompanysettingComponent } from './companysetting/companysetting.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyprofileComponent,
    CompanysettingComponent,
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
  ]
})
export class SettingModule { }
