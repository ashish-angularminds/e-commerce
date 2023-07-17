import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellersOrdersService {

  constructor(private httpclient: HttpClient) { }

  get(id?:string) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + (id?id:localStorage.getItem('activeuser')) });
    return this.httpclient.get<any>('https://shop-api.ngminds.com/orders', { headers: header });
  }

  getsingle(id: string) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + localStorage.getItem('activeuser') });
    return this.httpclient.get<any>(`https://shop-api.ngminds.com/orders/${id}`, { headers: header });
  }

  change(id: string, action: string) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + localStorage.getItem('activeuser') });
    return this.httpclient.patch<any>(`https://shop-api.ngminds.com/orders/${action}/${id}`, {}, { headers: header });
  }
}
