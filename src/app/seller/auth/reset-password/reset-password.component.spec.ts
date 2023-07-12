import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordComponent } from './reset-password.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { catchError, of, throwError } from 'rxjs';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;
  let router: Router;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetPasswordComponent],
      imports: [RouterTestingModule,HttpClientTestingModule,FormsModule],
      providers: []
    })
    .compileComponents();

    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset the password', () => {
    spyOn(authService, 'resetpassword').and.returnValue(of({}));
    spyOn(router, 'navigate');
    component.reset();
    expect(authService.resetpassword).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['auth/login']);
  })

  it('should throw error for reset fun', () => {
    spyOn(authService, 'resetpassword').and.returnValue(throwError({error:{message:'no'}}));
    component.reset();
    expect(authService.resetpassword).toHaveBeenCalled();
  });
});
