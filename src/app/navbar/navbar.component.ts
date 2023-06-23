import { Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { NavbarService } from './service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private navbarservice: NavbarService, private activted: ActivatedRoute) { }

  navbar = this.navbarservice;

  ngOnInit() {
    this.checkroute();
    this.navbarservice.changeprofilestate();
  }

  checkroute() {
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        this.navbarservice.sellerlogin = localStorage.getItem('activeuser');
        this.navbarservice.customerlogin = localStorage.getItem('loginuser');

        if ((/shop/.test(e.url)) || (/cart/.test(e.url))) {
          this.navbarservice.flag = false;
        }
        else {
          this.navbarservice.flag = true;
        }
      }
    });
  }

  activelink(event: any) {
    document.querySelectorAll('.nav-item > a').forEach((item) => { item.className = 'nav-link' });
    event.target.className = 'nav-link active'
    this.checkroute();
  }

  logoutcustomer() {
    localStorage.removeItem('loginuser');
    this.navbarservice.changeprofilestate();
    if ((/profile/.test(this.router.url))) {
      this.router.navigate(["/"]);
    }
    this.navbarservice.check();
  }

  logoutseller() {
    localStorage.removeItem('activeuser');
    this.router.navigate(['auth/login']);
    this.navbarservice.check();
  }

}
