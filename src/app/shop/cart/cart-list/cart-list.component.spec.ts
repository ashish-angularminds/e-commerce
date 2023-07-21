import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartListComponent } from './cart-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import { cartReducer } from '../store/cart.reducer';
import { CartService } from '../../services/cart/cart.service';
import { CustomerService } from '../../services/customer/customer.service';
import { of } from 'rxjs';
import { decreaseqty, increaseqty, removeproduct } from '../store/cart.actions';

describe('CartListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;
  let cartservice: CartService;
  let customerservice: CustomerService;
  let store: Store;
  let id = "632817cf74b8688370eb3d2b";


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartListComponent],
      imports: [HttpClientTestingModule, StoreModule.forRoot(cartReducer)]
    })
    .compileComponents();

    store = TestBed.inject(Store);
    customerservice = TestBed.inject(CustomerService);
    cartservice = TestBed.inject(CartService);
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all address', () => {
    spyOn(customerservice, 'getaddress').and.returnValue(of({}));
    localStorage.setItem('loginuser', 'mock');
    component.ngOnInit();
    expect(customerservice.getaddress).toHaveBeenCalledWith('mock');
  })

  it('should increase quantity of product', () => {
    spyOn(store, 'dispatch');
    component.inc(id);
    expect(store.dispatch).toHaveBeenCalledWith(
      increaseqty({ productId: id })
    )
  })

  it('should remove item from cart', () => {
    spyOn(store, 'dispatch');
    component.dec(id, 1);
    expect(store.dispatch).toHaveBeenCalledWith(
      removeproduct({ productId: id })
    )
  })
  
  it('should decrease quantity of product', () => {
    spyOn(store, 'dispatch');
    component.dec(id, 2);
    expect(store.dispatch).toHaveBeenCalledWith(
      decreaseqty({ productId: id })
    )
  })
});

