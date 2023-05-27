import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { user } from 'src/app/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private route: Router, private toast: NgToastService, private service: AuthService,
    private recaptchaV3Service: ReCaptchaV3Service) { }

  User: user = {
    email: '',
    password: '',
    name: '',
    company: '',
    captcha: '',
  }
  // alluser: user[] = [];
  register() {
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      this.User.captcha = token;
      this.service.set(this.User).subscribe(
        res => {
          console.log('My HTTP response', res);
          this.toast.success({
            detail: 'Registration Successful',
            summary: 'User is Registrated...',
            duration: 5000,
          });
          this.route.navigate(['/auth/login']);
        },
        err => {
          console.log('My HTTP Error', err);
          this.toast.error({
            detail: 'Registration failed',
            summary: err.error.message,
            duration: 5000,
          });
        },
      );
    })


    // this.alluser = JSON.parse(localStorage.getItem('users') || '[{"email":"admin@123.com","password":"123"}]');
    // let test = false;
    // this.alluser.map((u) => {
    //   if (u.email === this.User.email) {
    //     test = true
    //   }
    // });
    // if (test) {
    // }
    // else {
    // this.alluser.push(this.User);
    // localStorage.setItem('users', JSON.stringify(this.alluser))
    // console.log('Error:-', this.responce.error.message);
    // this.route.navigate(['/auth/login']);
    // }
    // console.log(this.alluser)
    // alert(this.responce);
  }
}
