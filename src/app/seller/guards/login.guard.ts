import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private routes: Router, private service: AuthService) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.flag(localStorage.getItem('activeuser')||'');
  }

  flag(str:string) {
    return new Promise<boolean>((resolve, reject) => {
      if (str.length > 0) {
        this.service.get(localStorage.getItem('activeuser')!).subscribe({
          next: (res) => {
            this.routes.navigate(['setting', 'my-profile']);
            resolve(false);
          },
          error: (err) => {
            localStorage.removeItem('activeuser');
            resolve(true);
          }
        })
      }
      else {
        resolve(true);
      }
    });
  }
}
