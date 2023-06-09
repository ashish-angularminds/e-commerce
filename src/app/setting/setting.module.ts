import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing.module';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CompanysettingComponent } from './companysetting/companysetting.component';
import { FormsModule } from '@angular/forms';
import { AdduserComponent } from './companysetting/adduser/adduser.component';
import { ChangeroleComponent } from './companysetting/changerole/changerole.component';
import { ChangeinfoComponent } from './companysetting/changeinfo/changeinfo.component';
import { ChangemypasswordComponent } from './companysetting/changemypassword/changemypassword.component';

@NgModule({
  declarations: [
    MyprofileComponent,
    CompanysettingComponent,
    AdduserComponent,
    ChangeroleComponent,
    ChangeinfoComponent,
    ChangemypasswordComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule,
  ],
})
export class SettingModule { }
