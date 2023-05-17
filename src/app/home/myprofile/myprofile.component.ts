import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/user';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private router: Router) { }

  user!: user;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('activeuser')!);
  }

  logout() {
    localStorage.removeItem('activeuser');
    this.router.navigate(['']);
  }
}
