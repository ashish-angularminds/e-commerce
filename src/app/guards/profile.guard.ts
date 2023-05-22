import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

  constructor(private router: Router, private service: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.flag().then((res) => {
    //   return true
    // },
    //   (error) => {
    //     return this.router.navigate(['auth', 'login']);
    //   }
    // );
    return this.flag();
    // return localStorage.getItem('activeuser') == null ? true : this.router.navigate(['home/my-profile']);
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
    return this.service.get(localStorage.getItem('activeuser')!
    ).pipe(
      map(res => {
        return true;
      }),
      catchError(err => {
        this.router.navigate(['auth', 'login'])
        return throwError(err);
      }));
  }
}
