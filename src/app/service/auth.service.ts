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

  setheader(token: string) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + token });
    return header;
  }

  set(payload: any) {
    return this.http.post('https://shop-api.ngminds.com/auth/register', payload);
  }

  login(payload: any) {
    return this.http.post('https://shop-api.ngminds.com/auth/login', payload);
  }

  get(token: string) {
    return this.http.get<any>('https://shop-api.ngminds.com/auth/self', { headers: this.setheader(token) })
  }

  forgetpassword(payload: any) {
    return this.http.post('https://shop-api.ngminds.com/auth/forgot-password', payload);
  }

  resetpassword(payload: any, parameters: any) {
    return this.http.post('https://shop-api.ngminds.com/auth/reset-password', payload, { params: parameters });
  }

  sendverificationmail(token:string) {
    return this.http.post('https://shop-api.ngminds.com/auth/send-verification-email', null, { 'headers': this.setheader(token) });
  }

  verifyaccount(parameters: any) {
    return this.http.post('https://shop-api.ngminds.com/auth/verify-email', null, { params: parameters });
  }

  googlelogin(payload: any) {
    return this.http.post('https://shop-api.ngminds.com/auth/login/google', payload);
  }
}
