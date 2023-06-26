import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpclient: HttpClient) { }

  setheader(token: string) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + token });
    return header;
  }

  get(token: string) {
    return this.httpclient.get<any>('https://shop-api.ngminds.com/shop/orders', { headers: this.setheader(token) })
  }

  getsingle(token: string, id: string) {
    return this.httpclient.get<any>(`https://shop-api.ngminds.com/shop/orders/${id}`, { headers: this.setheader(token) })
  }

  cancel(token: string, id: string) {
    return this.httpclient.patch(`https://shop-api.ngminds.com/shop/orders/cancel/${id}`, {}, { headers: this.setheader(token) })
  }

}
