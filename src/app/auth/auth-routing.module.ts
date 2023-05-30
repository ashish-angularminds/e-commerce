import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [LoginGuard]

  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [LoginGuard]

  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
