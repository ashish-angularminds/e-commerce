import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient: HttpClient) { }

  flag: boolean = false;

  getlist(pagination: any) {
    return this.httpclient.get<any>('https://shop-api.ngminds.com/shop/products', { params: pagination });
  }
}
