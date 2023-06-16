import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpclient: HttpClient) { }

  set(payload: any) {
    return this.httpclient.post('https://shop-api.ngminds.com/shop/auth/register', payload);
  }
}
