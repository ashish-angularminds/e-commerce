import { Component } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {

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
  });
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
          this.Toast.fire({
            icon: 'success',
            title: 'Registration Successful'
          });
        },
        err => {
          console.log(err);
          this.Toast.fire({
            icon: 'error',
            title: 'Authentication failed',
            text: err.error.message
          });
        }
      );
    });
  }
}
