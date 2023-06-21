import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { NavbarService } from 'src/app/navbar/service/navbar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

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

  ngOnInit(): void {
    setTimeout(() => {
      let dom = document.querySelector('.grecaptcha-badge') as HTMLElement;
      dom.style.display = 'none';
    }, 1000);

  }

  constructor(private service: CustomerService, private recaptchaV3Service: ReCaptchaV3Service,
    private navbar: NavbarService) { }

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
          this.navbar.customerlogin = localStorage.getItem('loginuser');
          this.navbar.changeprofilestate();
          this.Toast.fire({
            icon: 'success',
            title: 'Login Successful'
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
