import { Component } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {

  constructor(private service: CustomerService, private recaptchaV3Service: ReCaptchaV3Service) { }

  user = {
    email: '',
    password: '',
    name: '',
    address: {
      street: '',
      addressLine2: '',
      city: '',
      state: '',
      pin: '',
    },
    captcha: '',
  }

  register() {
    this.recaptchaV3Service.execute('importantAction').subscribe((token: string) => {
      this.user.captcha = token;
      this.service.set(this.user).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    });
  }
}
