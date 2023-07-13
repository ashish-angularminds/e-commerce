import { TestBed } from '@angular/core/testing';
import { LoginGuard } from './login.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../service/auth/auth.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('LoginGuard', () => {
  let guard: LoginGuard;
  let authService: AuthService;
  let router:Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    guard = TestBed.inject(LoginGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  // it('should canactive return true', async () => {
  //   spyOn(guard, 'canActivate').and.returnValue(
  //     Promise.resolve(false)
  //   )
  //   const canActivate = await guard.canActivate();
  //   expect(guard.canActivate).toHaveBeenCalled();
  //   expect(canActivate).toEqual(await Promise.resolve(false))
  // })

  it('should flag return value', () => {
    spyOn(authService, 'get').and.returnValue(of({}));
    spyOn(router, 'navigate');
    let a = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZjYTliYmVjNmQ0NmNlN2I4ZjA0ZTIiLCJpYXQiOjE2ODkyMjc3MTQsImV4cCI6MTY4OTMxNDExNCwidHlwZSI6ImFjY2VzcyJ9.q8RIIeGYIOaMHY-aDIrs8JLM8GPYlYPPAGGtI354iWI';
    guard.flag(a);
    expect(authService.get).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['setting', 'my-profile'])
  })

  it('should throw error', () => {
    spyOn(guard, 'canActivate').and.returnValue(
      Promise.resolve(false)
    )
    spyOn(authService, 'get').and.returnValue(throwError({error:{message:'no'}}));
    let a = 'eyJhbGciOiJMjc3MTQsImV4cCI6MTY4OTMxNDExNCwidHlwZSI6ImFjY2VzcyJ9.q8RIIeGYIOaMHY-aDIrs8JLM8GPYlYPPAGGtI354iWI';
    guard.canActivate();
    guard.flag(a);
    expect(authService.get).toHaveBeenCalled();
    expect(guard.canActivate).toHaveBeenCalled();
  })

});
