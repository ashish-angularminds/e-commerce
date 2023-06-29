import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from 'src/app/seller/products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient: HttpClient) { }

  flag: boolean = false;
  product = new BehaviorSubject<any>(undefined);

  getlist(pagination: any) {
    return this.httpclient.get<any>('https://shop-api.ngminds.com/shop/products', { params: pagination });
  }
}
