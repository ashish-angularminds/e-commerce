import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';
import { user } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private toast: NgToastService, private http: AuthService) { }
  ngOnInit() {
  }

  msg: string = '';

  loginUser = {
    email: '',
    password: ''
  }

  alluser!: any;
  login() {

    this.http.login(this.loginUser).subscribe(
      res => {
        console.log(res);
        this.toast.success({
          detail: 'Authentication Successful',
          summary: 'User is loged in...',
          duration: 5000,
        });
        let a: any = res;
        localStorage.setItem('activeuser', a.token);
        this.route.navigate(['/home/my-profile']);
      },
      err => {
        console.log(err);
        this.toast.error({
          detail: 'Authentication failed',
          summary: err.error.message,
          duration: 5000,
        });
      }
    )

    //   let test: any = {};
    //   let flag = false;
    //   this.alluser = JSON.parse(localStorage.getItem('users') || '[{"email":"admin@123.com","password":"123"}]');
    //   this.alluser.map((u: user) => {
    //     if (u.email === this.loginUser.email) {
    //       test = u;
    //       flag = true;
    //     }
    //   });
    //   if (flag) {
    //     if (test.password === this.loginUser.password) {
    //       
    //       localStorage.setItem('activeuser', JSON.stringify(test));
    //       this.route.navigate(['/home/my-profile']);
    //     }
    //     else {
    //       this.toast.error({
    //         detail: 'Authentication failed',
    //         summary: 'Password is wrong...',
    //         duration: 5000,
    //       });
    //     }
    //   }
    //   else {
    //     this.toast.error({
    //       detail: 'Authentication failed',
    //       summary: 'User doesnt exists...',
    //       duration: 5000,
    //     });
    //   }
  }
}
