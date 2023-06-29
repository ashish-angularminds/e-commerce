import { Injectable } from '@angular/core';
import { CustomerService } from 'src/app/shop/services/customer/customer.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private service: CustomerService) { }

  flag = false;
  customerlogin = localStorage.getItem('loginuser');
  sellerlogin = localStorage.getItem('activeuser');
  img: any;

  changeprofilestate() {
    this.customerlogin = localStorage.getItem('loginuser');
    this.service.get(this.customerlogin!).subscribe(res => {
      this.img = res.picture;
    });

  }
}
