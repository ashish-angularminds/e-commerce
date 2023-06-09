import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private routes: Router, private service: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // let id = localStorage.getItem('activeuser');
    // return id == undefined ? true : this.routes.navigate(['setting', 'my-profile']);
    return this.flag();
  }

  flag() {
    // return new Promise((resolve, reject) => {
    //   this.service.get(localStorage.getItem('activeuser')!).subscribe(
    //     res => {
    //       // console.log(res);
    //       resolve(true);
    //     },
    //     error => {
    //       // console.log(error);
    //       reject(error);
    //     }
    //   )
    // });
    if (localStorage.getItem('activeuser')) {
      return this.service.get(localStorage.getItem('activeuser')!
      ).pipe(
        map(res => {
          this.routes.navigate(['setting', 'my-profile']);
          return false;
        }),
        catchError((err: any): Observable<boolean> => {
          localStorage.removeItem('activeuser');
          let a: Observable<boolean> = new Observable().pipe(map(res => { return true; }));
          this.routes.navigate(['auth', 'login']);
          return a;
        }));
    }
    else {
      return true;
    }
  }
}
