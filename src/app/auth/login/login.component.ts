import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { user } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private toast: NgToastService) { }
  ngOnInit() {
    console.log(localStorage.getItem('users'))
  }

  msg: string = '';

  loginUser = {
    email: '',
    password: ''
  }

  alluser!: any;
  login() {
    let test: any = {};
    let flag = false;
    this.alluser = JSON.parse(localStorage.getItem('users') || '[{"email":"admin@123.com","password":"123"}]');
    this.alluser.map((u: user) => {
      if (u.email === this.loginUser.email) {
        test = u;
        flag = true;
      }
    });
    if (flag) {
      if (test.password === this.loginUser.password) {
        this.toast.success({
          detail: 'Authentication Successful',
          summary: 'User is loged in...',
          duration: 5000,
        });
        localStorage.setItem('activeuser', JSON.stringify(test));
        this.route.navigate(['/home/my-profile']);
      }
      else {
        this.toast.error({
          detail: 'Authentication failed',
          summary: 'Password is wrong...',
          duration: 5000,
        });
      }
    }
    else {
      this.toast.error({
        detail: 'Authentication failed',
        summary: 'User doesnt exists...',
        duration: 5000,
      });
    }
  }
}
