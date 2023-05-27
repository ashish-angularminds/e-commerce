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
    return this.http.post('https://shop-api.ngminds.com/auth/register', payload);
  }

  login(payload: any) {
    return this.http.post('https://shop-api.ngminds.com/auth/login', payload);
  }

  get(token: string) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + token });
    return this.http.get<any>('https://shop-api.ngminds.com/auth/self', { headers: header })
  }

  forgetpassword(payload: any) {
    return this.http.post('https://shop-api.ngminds.com/auth/forgot-password', payload);
  }

  resetpassword(payload: any, parameters: any) {
    return this.http.post('https://shop-api.ngminds.com/auth/reset-password', payload, { params: parameters });
  }

}
