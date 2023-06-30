import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from '../../service/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private http: AuthService,
    private recaptchaV3Service: ReCaptchaV3Service, private loader: NgxUiLoaderService,
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

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  ngOnInit() {
    this.loader.start();
    this.authService.signOut();
    this.recaptchaV3Service.execute('importantAction').subscribe((token) => {
      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        this.http.googlelogin({ token: user.idToken, captcha: token }).subscribe(
          res => {
            this.route.navigate(['setting', 'my-profile']);
            this.loginsuccess(res);
            this.loader.stop();
          },
          err => {
            this.Toast.fire({
              icon: 'error',
              title: 'Authentication failed',
              text: err.error.message
            });
            this.loader.stop();
          }
        );
      });
    });
    this.loader.stop();
  }

  loginsuccess(res: any) {
    this.Toast.fire({
      icon: 'success',
      title: 'Login successfully'
    })
    let a: any = res;
    localStorage.setItem('activeuser', a.token);
  }

  alluser!: any;
  login() {
    this.loader.start();
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      this.loginUser.captcha = token;
      this.http.login(this.loginUser).subscribe(
        res => {
          this.loader.stop();
          this.loginsuccess(res);
          let dom = document.querySelector('.grecaptcha-badge') as HTMLElement;
          dom.style.display = 'none';
          this.route.navigate(['setting', 'my-profile']);
        },
        err => {
          this.loader.stop();
          this.Toast.fire({
            icon: 'error',
            title: 'Authentication failed',
            text: err.error.message
          });
        }
      )
    });
  }

  forgetpassword() {
    this.loader.start();
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      this.http.forgetpassword({ email: this.email, captcha: token }).subscribe(
        res => {
          this.loader.stop();
          this.Toast.fire({
            icon: 'success',
            title: 'Email Sent',
            text: 'Check your email'
          });
        },
        err => {
          this.loader.stop();
          this.Toast.fire({
            icon: 'error',
            text: err.error.message
          });
        }
      );
    });
  }
}
