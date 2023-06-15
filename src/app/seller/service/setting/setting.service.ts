import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient) { }

  header = new HttpHeaders({ ['Authorization']: 'Bearer ' + localStorage.getItem('activeuser') });

  getuser(pagination: any) {
    return this.http.get<any>('https://shop-api.ngminds.com/users', { headers: this.header, params: pagination }).pipe(pluck('results'));
  }
  createuser(payload: any) {
    return this.http.post<any>('https://shop-api.ngminds.com/users', payload, { headers: this.header });
  }

  updateorg(payload: any) {
    return this.http.patch<any>('https://shop-api.ngminds.com/users/org', payload, { headers: this.header });
  }

  changerole(payload: any, id: string) {
    return this.http.patch<any>(`https://shop-api.ngminds.com/users/role/${id}`, payload, { headers: this.header });
  }

  changeinfo(payload: any, id: string) {
    return this.http.patch<any>(`https://shop-api.ngminds.com/users/${id}`, payload, { headers: this.header });
  }

  deleteuser(id: string) {
    return this.http.delete<any>(`https://shop-api.ngminds.com/users/${id}`, { headers: this.header });
  }

  changepassword(payload: any) {
    return this.http.post('https://shop-api.ngminds.com/users/auth/change-password', payload, { headers: this.header });
  }

}