import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';

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
    return this.flag(localStorage.getItem('activeuser') || '');
    // return localStorage.getItem('activeuser') == null ? true : this.router.navigate(['home/my-profile']);
  }

  flag(str: string) {
    return new Promise<any>((resolve, reject) => {
      if (str.length > 0) {
        this.service.get(localStorage.getItem('activeuser')!).subscribe(
          res => {
            resolve(true);
          },
          error => {
            localStorage.removeItem('activeuser');
            this.router.navigate(['auth', 'login']);
          }
        )
      }
      else {
        this.router.navigate(['auth', 'login']);
      }

    });
    // return this.service.get(str).pipe(
    //   map(res => {
    //     return true;
    //   }),
    //   catchError(err => {
    //     return this.router.navigate(['auth', 'login']);
    //   }));
  }
}
