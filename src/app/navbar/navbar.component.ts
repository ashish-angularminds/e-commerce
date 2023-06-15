import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }

  flag = false;

  ngOnInit() {
    this.checkroute();
  }

  checkroute() {
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        if (!(/auth/.test(e.url))) {
          this.flag = true;
        }
        else {
          this.flag = false;
        }
      }
    });
  }

  activelink(id: number) {
    let arr = document.querySelectorAll('li > a');
    arr.forEach((item, index) => {
      if (index <= 1) {
        if (index == id) {
          item.className = 'nav-link active';
        }
        else {
          item.className = 'nav-link';
        }
      }
    })
    this.checkroute();
  }

  logout() {
    localStorage.removeItem('activeuser');
    this.router.navigate(['auth','login']);
  }
}
