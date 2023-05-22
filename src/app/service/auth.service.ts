import { Injectable, OnInit } from '@angular/core';
import { user } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit() {
  }

  set(payload: any) {
    return this.http.post('https://shop-api.ngminds.com/auth/register?captcha=false', payload);
  }

  login(payload: any) {
    return this.http.post('https://shop-api.ngminds.com/auth/login?captcha=false', payload);
  }

  get(token: string) {
    let auth: string = 'Authorization';
    let header = new HttpHeaders({ [auth]: 'Bearer ' + token });
    return this.http.get<any>('https://shop-api.ngminds.com/auth/self', { headers: header })
  }
}
