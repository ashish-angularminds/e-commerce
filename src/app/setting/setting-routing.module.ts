import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CompanysettingComponent } from './companysetting/companysetting.component';
import { AdduserComponent } from './companysetting/adduser/adduser.component';

const routes: Routes = [
  {
    path: 'my-profile',
    component: MyprofileComponent
  },
  {
    path: 'company-setting',
    component: CompanysettingComponent,
    // children: [
    //   {
    //     path: 'add',
    //     component: AdduserComponent
    //   }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
