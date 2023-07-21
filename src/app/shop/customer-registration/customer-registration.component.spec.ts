import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegistrationComponent } from './customer-registration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service, RecaptchaV3Module } from 'ng-recaptcha';
import { cartReducer } from '../cart/store/cart.reducer';
import { environment } from 'src/app/environment';
import { CustomerService } from '../services/customer/customer.service';
import { of, throwError } from 'rxjs';

describe('CustomerRegistrationComponent', () => {
  let component: CustomerRegistrationComponent;
  let fixture: ComponentFixture<CustomerRegistrationComponent>;
  let recaptchaV3Service: ReCaptchaV3Service;
  let customerservice: CustomerService;
  let mockdata = {
    email: '',
    password: '',
    name: '',
    address: {
      street: '',
      addressLine2: '',
      city: '',
      state: '',
      pin: '',
    },
    captcha: '',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerRegistrationComponent],
      imports: [HttpClientTestingModule, StoreModule.forRoot(cartReducer), RecaptchaV3Module, FormsModule],
      providers: [{
        provide: RECAPTCHA_V3_SITE_KEY,
        useValue: environment.recaptcha.siteKey,
      }]
    })
      .compileComponents();

    recaptchaV3Service = TestBed.inject(ReCaptchaV3Service);
    customerservice = TestBed.inject(CustomerService);
    fixture = TestBed.createComponent(CustomerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login customer', () => {
    spyOn(recaptchaV3Service, 'execute').and.returnValue(of(''));
    spyOn(customerservice, 'set').and.returnValue(of({}));
    component.register();
    expect(recaptchaV3Service.execute).toHaveBeenCalledWith('importantAction');
    expect(customerservice.set).toHaveBeenCalledWith(mockdata);
  })

  it('should throw error while login customer', () => {
    spyOn(recaptchaV3Service, 'execute').and.returnValue(of(''));
    spyOn(customerservice, 'set').and.returnValue(throwError({ error: { message: 'error' } }));
    component.register();
    expect(recaptchaV3Service.execute).toHaveBeenCalledWith('importantAction');
    expect(customerservice.set).toHaveBeenCalledWith(mockdata);
  })
})