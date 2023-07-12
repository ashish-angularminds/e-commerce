import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from 'src/app/environment';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { of, throwError } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let authService: AuthService;
  let loader: NgxUiLoaderService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [HttpClientTestingModule, RecaptchaV3Module, FormsModule],
      providers: [
        {
          provide: RECAPTCHA_V3_SITE_KEY,
          useValue: environment.recaptcha.siteKey,
        }
      ]
    })
    .compileComponents();

    router = TestBed.inject(Router);
    loader = TestBed.inject(NgxUiLoaderService);
    authService = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register successfully', () => {
    spyOn(authService, 'set').and.returnValue(of({}));
    spyOn(loader, 'start');
    spyOn(loader, 'stop');
    spyOn(router, 'navigate');
    component.register();
    expect(authService.set).toHaveBeenCalled();
    expect(loader.start).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
    expect(loader.stop).toHaveBeenCalled();
  })

  it('should register throw error', () => {
    spyOn(authService, 'set').and.returnValue(throwError({ error: { message: 'no' } }));
    spyOn(loader, 'stop');
    component.register();
    expect(authService.set).toHaveBeenCalled();
    expect(loader.stop).toHaveBeenCalled();
  })
});
