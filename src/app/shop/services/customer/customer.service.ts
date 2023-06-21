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
    return this.httpclient.get<any>('https://shop-api.ngminds.com/shop/auth/self', { headers: this.setheader(token) })
  }

  updateprofile(token: string, payload: any) {
    return this.httpclient.patch<any>('https://shop-api.ngminds.com/customers/update-profile', payload, { headers: this.setheader(token) })
  }

  updateprofileimg(token: string, payload: any) {
    return this.httpclient.post<any>('https://shop-api.ngminds.com/customers/profile-picture', payload, { headers: this.setheader(token) })
  }

  removeprofileimg(token: string) {
    return this.httpclient.delete('https://shop-api.ngminds.com/customers/profile-picture', { headers: this.setheader(token) })
  }

  getaddress(token: string) {
    return this.httpclient.get<any>('https://shop-api.ngminds.com/customers/address', { headers: this.setheader(token) })
  }

  setaddress(token: string, payload: any) {
    return this.httpclient.post<any>('https://shop-api.ngminds.com/customers/address', payload, { headers: this.setheader(token) })
  }

  updateaddress(token: string, payload: any, id: string) {
    return this.httpclient.put<any>(`https://shop-api.ngminds.com/customers/address/${id}`, payload, { headers: this.setheader(token) })
  }

  deleteaddress(token: string, id: string) {
    return this.httpclient.delete(`https://shop-api.ngminds.com/customers/address/${id}`, { headers: this.setheader(token) })
  }

  changepassword(token: string, payload: any) {
    return this.httpclient.post<any>('https://shop-api.ngminds.com/customers/auth/change-password', payload, { headers: this.setheader(token) })
  }

  deleteaccount(token: string) {
    return this.httpclient.delete('https://shop-api.ngminds.com/customers/account', { headers: this.setheader(token) })
  }
}
