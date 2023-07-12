import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service, RecaptchaV3Module } from 'ng-recaptcha';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { environment } from 'src/app/environment';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let recaptchaV3Service: ReCaptchaV3Service;
  let authService: SocialAuthService;
  let auth: AuthService;
  let router: Router;
  let loader: NgxUiLoaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,SocialLoginModule,RecaptchaV3Module,FormsModule],
      providers: [AuthService, NgxUiLoaderService,
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            authLogin: true,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(environment.google_clientid.clientId),
              },
            ],
          } as SocialAuthServiceConfig,
        },
        {
          provide: RECAPTCHA_V3_SITE_KEY,
          useValue: environment.recaptcha.siteKey,
        }],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    loader = TestBed.inject(NgxUiLoaderService);
    router = TestBed.inject(Router);
    auth = TestBed.inject(AuthService);
    authService = TestBed.inject(SocialAuthService);
    recaptchaV3Service = TestBed.inject(ReCaptchaV3Service);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should google login success', fakeAsync(() => {
    component.getrecaptcha(recaptchaV3Service);
    spyOn(auth, 'googlelogin').and.returnValue(of({}));
    spyOn(router, 'navigate');
    spyOn(loader, 'start');
    spyOn(loader, 'stop');
    component.googlelogin('sdsdddsd', 'ddfddfbjgb');
    tick(1000);
    expect(loader.start).toHaveBeenCalled();
    expect(auth.googlelogin).toHaveBeenCalledWith({
      token: 'sdsdddsd',
      captcha: 'ddfddfbjgb'
    });
    expect(router.navigate).toHaveBeenCalledWith(['setting', 'my-profile']);
    expect(loader.stop).toHaveBeenCalled();
    flush();
  }));

  it('should google login throw error', () => {
    spyOn(auth, 'googlelogin').and.returnValue(throwError({ error: { message: 'no' } }));
    component.googlelogin('sdsdddsd', 'ddfddfbjgb');
    expect(auth.googlelogin).toHaveBeenCalled();
  })

  it('should login success', () => {
    spyOn(auth, 'login').and.returnValue(of({}));
    spyOn(router, 'navigate');
    component.login();
    expect(auth.login).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['setting', 'my-profile']);
  })

  it('should login throw error', () => {
    spyOn(auth, 'login').and.returnValue(throwError({ error: { message: 'no' } }));
    component.login();
    expect(auth.login).toHaveBeenCalled();
  })

  it('should forgetpassword success', () => {
    spyOn(auth, 'forgetpassword').and.returnValue(of({}));
    component.forgetpassword();
    expect(auth.forgetpassword).toHaveBeenCalled();
  })

  it('should forgetpassword throw error', () => {
    spyOn(auth, 'forgetpassword').and.returnValue(throwError({ error: { message: 'no' } }));
    component.forgetpassword();
    expect(auth.forgetpassword).toHaveBeenCalled();
  })
});
