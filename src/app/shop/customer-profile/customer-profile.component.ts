import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  user: any = {
    name: '',
    email: '',
    picture: ''
  };

  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.service.get(localStorage.getItem('loginuser')!).subscribe(
      res => {
        this.user = res;
      },
      err => {
        console.log(err)
      }
    );
  }

  setprofile(payload: any) {
    console.log('fun called');
    this.user = payload;
    console.log(this.user);
  }
}
