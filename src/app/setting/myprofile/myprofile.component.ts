import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { user } from 'src/app/user';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private router: Router, private http: AuthService) { }

  user!: any;
  ngOnInit() {
    let token = localStorage.getItem('activeuser')!;
    this.http.get(token).subscribe(
      res => { console.log(res); this.user = res; },
      err => { console.log(err); this.router.navigate(['auth', 'login']) },
    );
  }

  logout() {
    localStorage.removeItem('activeuser');
    this.router.navigate(['auth', 'login']);
  }
}
