import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { CompanysettingComponent } from './companysetting/companysetting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-profile',
    pathMatch: 'full'
  },
  {
    path: 'my-profile',
    component: MyprofileComponent
  },
  {
    path: 'company-setting',
    component: CompanysettingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
