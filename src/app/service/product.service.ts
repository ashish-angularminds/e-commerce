import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient: HttpClient) { }

  create(payload: any) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + localStorage.getItem('activeuser') });
    return this.httpclient.post<any>('https://shop-api.ngminds.com/products', payload, { headers: header });
  }

  getall(pagination: any) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + localStorage.getItem('activeuser') });
    return this.httpclient.get<any>('https://shop-api.ngminds.com/products', { headers: header, params: pagination });
  }
}
