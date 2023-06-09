import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  flag = true;
  tempflag = true;

  ngOnInit() {
    this.router.events.subscribe((e: Event) => {
      if (e instanceof NavigationEnd) {
        
        if (/products/.test(e.url) || /home/.test(e.url) || /setting/.test(e.url)) {
          this.flag = true;
        }
        else if (/shop/.test(e.url)) {
          this.tempflag = true;
        }
        else {
          this.flag = false;
          this.tempflag = false;
        }
      }
    });
  }
}
