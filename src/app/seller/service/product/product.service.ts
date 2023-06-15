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

  getone(id: string) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + localStorage.getItem('activeuser') });
    return this.httpclient.get<any>(`https://shop-api.ngminds.com/products/${id}`, { headers: header });
  }

  delete(id: string) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + localStorage.getItem('activeuser') });
    return this.httpclient.delete<any>(`https://shop-api.ngminds.com/products/${id}`, { headers: header });
  }

  update(id: string, payload: any) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + localStorage.getItem('activeuser') });
    return this.httpclient.patch<any>(`https://shop-api.ngminds.com/products/${id}`, payload, { headers: header });
  }

  updateimg(id: string, payload: any) {
    let header = new HttpHeaders({ ['Authorization']: 'Bearer ' + localStorage.getItem('activeuser') });
    return this.httpclient.patch<any>(`https://shop-api.ngminds.com/products/images/${id}`, payload, { headers: header });
  }
}
