import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { user } from 'src/app/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private route: Router, private toast: NgToastService) { }

  User: user = {
    email: '',
    password: '',
    fullname: '',
    companyname: ''
  }
  alluser: user[] = [];
  register() {
    this.alluser = JSON.parse(localStorage.getItem('users') || '[{"email":"admin@123.com","password":"123"}]');
    let test = false;
    this.alluser.map((u) => {
      if (u.email === this.User.email) {
        test = true
      }
    });

    if (test) {
      this.toast.error({
        detail: 'Registration failed',
        summary: 'User Already Exist!',
        duration: 5000,
      });
    }
    else {
      this.alluser.push(this.User);
      localStorage.setItem('users', JSON.stringify(this.alluser))
      this.toast.success({
        detail: 'Registration Successful',
        summary: 'User is Registrated...',
        duration: 5000,
      });
      this.route.navigate(['/auth/login']);
    }
    console.log(this.alluser)
  }
}
