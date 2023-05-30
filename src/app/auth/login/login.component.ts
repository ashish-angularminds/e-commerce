import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { AuthService } from 'src/app/service/auth.service';
import { user } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private toast: NgToastService, private http: AuthService,
    private recaptchaV3Service: ReCaptchaV3Service,
    private authService: SocialAuthService) { }

  user!: SocialUser;
  loggedIn!: boolean;
  email!: string;
  msg: string = '';
  loginUser = {
    email: '',
    password: '',
    captcha: '',
  }

  ngOnInit() {
    this.authService.signOut();
    this.recaptchaV3Service.execute('importantAction').subscribe((token) => {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        this.http.googlelogin({ token: user.idToken, captcha: token }).subscribe(
          res => {
            this.route.navigate(['setting', 'my-profile']);
            this.loginsuccess(res);
          },
          err => {
            this.toast.error({
              detail: 'Authentication failed',
              summary: err.error.message,
              duration: 5000,
            });
          }
        );
      });
    });
  }

  loginsuccess(res: any) {
    this.toast.success({
      detail: 'Authentication Successful',
      summary: 'User is loged in...',
      duration: 5000,
    });
    let a: any = res;
    localStorage.setItem('activeuser', a.token);
  }

  alluser!: any;
  login() {
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      this.loginUser.captcha = token;
      this.http.login(this.loginUser).subscribe(
        res => {
          this.loginsuccess(res);
          let dom = document.querySelector('.grecaptcha-badge') as HTMLElement;
          dom.style.display = 'none';
          this.route.navigate(['setting', 'my-profile']);
        },
        err => {
          this.toast.error({
            detail: 'Authentication failed',
            summary: err.error.message,
            duration: 5000,
          });
        }
      )
    });
  }

  forgetpassword() {
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      this.http.forgetpassword({ email: this.email, captcha: token }).subscribe(
        res => {
          this.toast.success({
            detail: 'Email Send Successfully',
            summary: 'Check your email',
            duration: 3000
          })
        },
        err => {
          this.toast.error({
            summary: err.error.message,
            duration: 3000
          })
        }
      );
    });
  }
}
