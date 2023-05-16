import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

const routes: Routes = [
  {
    path: 'my-profile',
    component: MyprofileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
