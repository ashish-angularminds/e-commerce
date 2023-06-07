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
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        if (/products/.test(e.url) || /home/.test(e.url)) {
          this.flag = true;
        }
        else if (/setting/.test(e.url)) {
          this.flag = false;
        }
      }
    });

    console.log();
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

  }

  logout() {
    localStorage.removeItem('activeuser');
    this.router.navigate(['auth', 'login']);
  }
}
