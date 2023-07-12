import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from '../../service/auth/auth.service';
import Swal from 'sweetalert2';
import { NavbarService } from 'src/app/navbar/service/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private http: AuthService,
    private recaptchaV3Service: ReCaptchaV3Service, private loader: NgxUiLoaderService,
    private authService: SocialAuthService, private navbarservice: NavbarService) { }

  recaptchatoken: any;
  user!: SocialUser;
  loggedIn!: boolean;
  email!: string;
  msg: string = '';
  loginUser = {
    email: '',
    password: '',
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

  public getrecaptcha(recaptchaV3Service:ReCaptchaV3Service): void {
    recaptchaV3Service?.execute('importantAction').subscribe(token => {
      this.recaptchatoken = token;
    });
  }

  ngOnInit() {
    this.getrecaptcha(this.recaptchaV3Service);
    // this.authService.signOut();
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = (user != null);
      this.googlelogin(this.user?.idToken, this.recaptchatoken);
    },
      err => {
        console.log(err);
      });
  }

  googlelogin(usertoken: any, recaptchatoken: any) {
    this.loader.start();
    this.getrecaptcha(this.recaptchaV3Service);
    this.http.googlelogin({ token: usertoken, captcha: recaptchatoken }).subscribe(
      res => {
        this.route.navigate(['setting', 'my-profile']);
        this.loginsuccess(res);
        this.navbarservice.sellerlogin.next(localStorage.getItem('activeuser')!);
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
  }

  loginsuccess(res: any) {
    this.Toast.fire({
      icon: 'success',
      title: 'Login successfully'
    })
    let a: any = res;
    localStorage.setItem('activeuser', a.token);
  }

  login() {
    this.loader.start();
    this.getrecaptcha(this.recaptchaV3Service);
    this.http.login({ email: this.loginUser.email, password: this.loginUser.password, captcha: this.recaptchatoken }).subscribe(
      res => {
        this.loader.stop();
        this.loginsuccess(res);
        let dom: HTMLElement = document.querySelector('.grecaptcha-badge') as HTMLElement;
        dom!.style.display = 'none';
        this.route.navigate(['setting', 'my-profile']);
        this.navbarservice.sellerlogin.next(localStorage.getItem('activeuser')!);
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
  }

  forgetpassword() {
    this.loader.start();
    this.getrecaptcha(this.recaptchaV3Service);
    this.http.forgetpassword({ email: this.email, captcha: this.recaptchatoken }).subscribe(
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
  }
}
