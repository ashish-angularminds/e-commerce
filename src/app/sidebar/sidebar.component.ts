import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) { }
  flag = true;
  productFlag = false;
  settingFlag = false;
  ngOnInit(): void {
    this.checkroute();
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        if (/product/.test(e.url)) {
          this.productFlag = true;
          this.settingFlag = false;
        }
        else if (/setting/.test(e.url)) {
          this.settingFlag = true;
          this.productFlag = false;
        }
      }
    })
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
}
