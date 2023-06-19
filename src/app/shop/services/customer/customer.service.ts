import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpclient: HttpClient) { }

  setheader(token: string) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + token });
    return header;
  }

  set(payload: any) {
    return this.httpclient.post('https://shop-api.ngminds.com/shop/auth/register', payload);
  }

  login(payload: any) {
    return this.httpclient.post('https://shop-api.ngminds.com/shop/auth/login', payload);
  }

  get(token: string) {
    return this.httpclient.get('https://shop-api.ngminds.com/shop/auth/self', { headers: this.setheader(token) })
  }

  updateprofile(token: string, payload: any) {
    return this.httpclient.patch<any>('https://shop-api.ngminds.com/customers/update-profile', payload, { headers: this.setheader(token) })
  }

  updateprofileimg(token: string, payload: any) {
    return this.httpclient.post<any>('https://shop-api.ngminds.com/customers/profile-picture', payload, { headers: this.setheader(token) })
  }
}
