import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../service/auth/auth.service';
import { of } from 'rxjs';
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

  it('should flag return value', () => {
    spyOn(authService, 'get').and.returnValue(of({}));
    spyOn(router, 'navigate');
    guard.flag();
    expect(authService.get).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['setting', 'my-profile'])
  })
});
