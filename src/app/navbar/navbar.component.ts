import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { NavbarService } from './service/navbar.service';
import { CartService } from '../shop/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private navbarservice: NavbarService,
    private cartservice: CartService) { }

  navbarflag = this.navbarservice.flag;
  sellerlogin = this.navbarservice.sellerlogin;
  customerlogin = this.navbarservice.customerlogin;
  img = this.navbarservice.img;

  ngOnInit() {
    this.checkroute();
    this.navbarservice.changeprofilestate();
  }

  checkroute() {
    this.navbarservice.sellerlogin.next(localStorage.getItem('activeuser')!);
    this.navbarservice.customerlogin.next(localStorage.getItem('loginuser')!);
    if (this.router.url.includes('shop') || this.router.url.includes('cart')) {
      this.pushflag(false);
    }
    else {
      this.pushflag(true);
    }


  }
  pushflag(flag: boolean) {
    this.navbarflag.next(flag);
  }

  activelink(event?: any) {
    document.querySelectorAll('.nav-item > a').forEach((item) => { item.className = 'nav-link' });
    event.target.className = 'nav-link active'
    this.checkroute();
  }

  logoutcustomer() {
    this.navbarservice.changeprofilestate();
    localStorage.removeItem('loginuser');
    // if (this.router.url.includes('profile')) {
      this.router.navigate(["/"]);
    // }
    this.cartservice.login.next(false);
  }

  logoutseller() {
    localStorage.removeItem('activeuser');
    this.navbarservice.sellerlogin.next(localStorage.getItem('activeuser')!);
    this.router.navigate(['auth/login']);
  }

}
