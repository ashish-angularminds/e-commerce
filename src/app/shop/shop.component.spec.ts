import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from '../environment';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart/store/cart.reducer';
import { FormsModule } from '@angular/forms';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopComponent, CustomerLoginComponent, CustomerRegistrationComponent],
      imports: [ShopRoutingModule, HttpClientTestingModule, RecaptchaV3Module, StoreModule.forRoot(cartReducer), FormsModule],
      providers: [{
        provide: RECAPTCHA_V3_SITE_KEY,
        useValue: environment.recaptcha.siteKey,
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
