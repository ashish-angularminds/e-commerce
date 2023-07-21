import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentComponent } from './payment.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { CartService } from '../../services/cart/cart.service';
import { cartReducer } from '../store/cart.reducer';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;
  let cartservice: CartService;
  let store: Store;
  let router: Router;
  let id = "632817cf74b8688370eb3d2b";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, StoreModule.forRoot(cartReducer)]
    })
    .compileComponents();

    router = TestBed.inject(Router);
    store = TestBed.inject(Store);
    cartservice = TestBed.inject(CartService);
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should place order', () => {
    let mockcard = {
      nameOnCard: '',
      cardNumber: '',
      expiry: '/',
      cvv: ''
    }
    localStorage.setItem('loginuser', '');
    spyOn(cartservice, 'pay').and.returnValue(of({}));
    spyOn(router, 'navigate');
    component.placeorder();
    expect(cartservice.pay).toHaveBeenCalledWith('', mockcard, '');
    expect(router.navigate).toHaveBeenCalledWith(['']);
  })

  it('should place order', () => {
    let mockcard = {
      nameOnCard: '',
      cardNumber: '',
      expiry: '/',
      cvv: ''
    }
    localStorage.setItem('loginuser', '');
    spyOn(cartservice, 'pay').and.returnValue(throwError({error:{message:'error'}}));
    component.placeorder();
    expect(cartservice.pay).toHaveBeenCalledWith('', mockcard, '');
  })
});
