import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) { }
  productFlag = false;
  settingFlag = true;
  ngOnInit(): void {
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        if (/products/.test(e.url)) {
          this.productFlag = true;
          this.settingFlag = false;
        }
        else if (/setting/.test(e.url)) {
          this.settingFlag = true;
          this.productFlag = false;
        }
        else {
          this.productFlag = false;
          this.settingFlag = false;
        }
      }
    })
  }
}
