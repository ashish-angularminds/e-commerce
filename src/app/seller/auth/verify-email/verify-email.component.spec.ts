import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailComponent } from './verify-email.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { of, throwError } from 'rxjs';

describe('VerifyEmailComponent', () => {
  let component: VerifyEmailComponent;
  let fixture: ComponentFixture<VerifyEmailComponent>;
  let router: Router;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyEmailComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      
    })
    .compileComponents();

    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(VerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should send verification mail', () => {
    spyOn(authService, 'verifyaccount').and.returnValue(of({}));
    spyOn(router, 'navigate');
    component.ngOnInit();
    expect(authService.verifyaccount).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['']);
  })

  it('Should throw error for verification mail', () => {
    spyOn(authService, 'verifyaccount').and.returnValue(throwError({error:{message:'no'}}));
    component.ngOnInit();
    expect(authService.verifyaccount).toHaveBeenCalled();
  })
});
