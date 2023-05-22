import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
    // if (localStorage.getItem('activeuser') != undefined) {
    //   this.userava = true;
    //   this.router.navigate(['home', 'my-profile']);
    // }
    // else {
    //   this.userava = false;
    //   this.router.navigate(['auth', 'login']);
    // }
  }
  title = 'e-commerce';
  userava = false;
}
