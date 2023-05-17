import { Injectable, OnInit } from '@angular/core';
import { user } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  login(u: user[]) {
  }
}
