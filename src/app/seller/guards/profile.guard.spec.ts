import { TestBed } from '@angular/core/testing';
import { ProfileGuard } from './profile.guard';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('ProfileGuard', () => {
  let guard: ProfileGuard;
  let authService: AuthService;
  let router:Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: []
    });
    guard = TestBed.inject(ProfileGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should flag return value', () => {
    spyOn(authService, 'get').and.returnValue(of({}));
    let a = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZjYTliYmVjNmQ0NmNlN2I4ZjA0ZTIiLCJpYXQiOjE2ODkyMjc3MTQsImV4cCI6MTY4OTMxNDExNCwidHlwZSI6ImFjY2VzcyJ9.q8RIIeGYIOaMHY-aDIrs8JLM8GPYlYPPAGGtI354iWI';
    guard.flag(a);
    expect(authService.get).toHaveBeenCalled();
  })

  it('should throw error', ()=>{
    spyOn(authService, 'get').and.returnValue(throwError({ error: { message: 'no' } }));
    spyOn(router, 'navigate');
    let a = 'q8RIIeGYIOaMHY-aDIrs8JLM8GPYlYPPAGGtI354iWI';
    guard.flag(a);
    expect(authService.get).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['auth', 'login'])
  })

  it('should redirect', () => {
    spyOn(router, 'navigate');
    guard.flag('');
    expect(router.navigate).toHaveBeenCalledWith(['auth', 'login'])
  })
});
