import { Component } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {

  constructor(private service: CustomerService, private recaptchaV3Service: ReCaptchaV3Service) { }

  user = {
    email: '',
    password: '',
    captcha: ''
  }

  login() {
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      this.user.captcha = token;
      this.service.login(this.user).subscribe(
        (res: any) => {
          console.log(res);
          localStorage.setItem('loginuser', res.token);
        },
        err => {
          console.log(err)
        }
      );
    });
  }
}
