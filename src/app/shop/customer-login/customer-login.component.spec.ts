import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoginComponent } from './customer-login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import { cartReducer } from '../cart/store/cart.reducer';
import { RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from 'src/app/environment';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../services/customer/customer.service';
import { of, throwError } from 'rxjs';

describe('CustomerLoginComponent', () => {
  let component: CustomerLoginComponent;
  let fixture: ComponentFixture<CustomerLoginComponent>;
  let recaptchaV3Service: ReCaptchaV3Service;
  let store: Store;
  let customerservice: CustomerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerLoginComponent],
      imports: [HttpClientTestingModule, StoreModule.forRoot(cartReducer), RecaptchaV3Module, FormsModule],
      providers: [{
        provide: RECAPTCHA_V3_SITE_KEY,
        useValue: environment.recaptcha.siteKey,
      }]
    })
    .compileComponents();

    store = TestBed.inject(Store);
    recaptchaV3Service = TestBed.inject(ReCaptchaV3Service);
    customerservice = TestBed.inject(CustomerService);
    fixture = TestBed.createComponent(CustomerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login customer', () => {
    spyOn(recaptchaV3Service, 'execute').and.returnValue(of(''));
    spyOn(customerservice, 'login').and.returnValue(of({}));
    spyOn(store, 'dispatch');
    component.login();
    expect(recaptchaV3Service.execute).toHaveBeenCalledWith('importantAction');
    expect(customerservice.login).toHaveBeenCalledWith({
      email: '',
      password: '',
      captcha: ''
    });
    expect(store.dispatch).toHaveBeenCalled();
  })

  it('should throw error while login customer', () => {
    spyOn(recaptchaV3Service, 'execute').and.returnValue(of(''));
    spyOn(customerservice, 'login').and.returnValue(throwError({error:{message:'error'}}));
    component.login();
    expect(recaptchaV3Service.execute).toHaveBeenCalledWith('importantAction');
    expect(customerservice.login).toHaveBeenCalledWith({
      email: '',
      password: '',
      captcha: ''
    });
  })
});
