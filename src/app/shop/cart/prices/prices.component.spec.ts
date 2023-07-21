import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricesComponent } from './prices.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartService } from '../../services/cart/cart.service';
import { CustomerService } from '../../services/customer/customer.service';
import { Store, StoreModule } from '@ngrx/store';
import { cartReducer } from '../store/cart.reducer';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('PricesComponent', () => {
  let component: PricesComponent;
  let fixture: ComponentFixture<PricesComponent>;
  let cartservice: CartService;
  let customerservice: CustomerService;
  let store: Store;
  let router: Router;
  let id = "632817cf74b8688370eb3d2b";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricesComponent],
      imports: [HttpClientTestingModule, StoreModule.forRoot(cartReducer)],
      providers: [CustomerService, CartService]
    })
      .compileComponents();

    router = TestBed.inject(Router);
    store = TestBed.inject(Store);
    cartservice = TestBed.inject(CartService);
    customerservice = TestBed.inject(CustomerService);
    fixture = TestBed.createComponent(PricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should place order', () => {
    let mockpayload = {
      items: [],
      deliveryFee: 99,
      total: 0,
      address: {}
    }
    let mockdata = [
      {
        "street": "Pan card Road, Baner",
        "addressLine2": "KM Gad Road, Naka",
        "city": "Karad",
        "state": "MAHARASHTRA",
        "pin": "432222",
        "_id": "6496b65a8314b2229deb8f1d"
      }
    ];
    let mockorder = {
      "order": {
        "items": [
          {
            "productId": "63c6205a04d12a4fe7ab50cc",
            "name": "1111",
            "price": 50,
            "qty": 1,
            "subTotal": 50,
            "_id": "64b9346e8314b2229df0c1f5"
          }
        ],
        "deliveryFee": 99,
        "total": 50,
        "address": {
          "street": "Pan card Road, Baner",
          "addressLine2": "KM Gad Road, Naka",
          "city": "Karad",
          "state": "MAHARASHTRA",
          "pin": "432222"
        },
        "paymentStatus": "Pending",
        "status": "Pending",
        "createdBy": "6492b6718314b2229deb245a",
        "deleted": false,
        "_id": "64b9346e8314b2229df0c1f4",
        "createdAt": "2023-07-20T13:19:42.212Z",
        "updatedAt": "2023-07-20T13:19:42.212Z",
        "__v": 0
      }
    }
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDkyYjY3MTgzMTRiMjIyOWRlYjI0NWEiLCJpYXQiOjE2ODk4NTcwNDIsImV4cCI6MTY4OTk0MzQ0MiwidHlwZSI6ImFjY2VzcyJ9.a1Evu79wynzZ2V3SNyNmfM-kqAL3cuJXlIVTZNUIt2I';
    localStorage.setItem('loginuser', token);
    component.addressid = 1;
    spyOn(customerservice, 'getaddress').and.returnValue(of(mockdata));
    spyOn(cartservice, 'creat').and.returnValue(of(mockorder));
    spyOn(router, 'navigate');
    component.placeorder();
    expect(customerservice.getaddress).toHaveBeenCalledWith(token);
    expect(cartservice.creat).toHaveBeenCalledWith(token, mockpayload);
    expect(router.navigate).toHaveBeenCalledWith(['shop', 'cart', 'confirm', '64b9346e8314b2229df0c1f4'])
  });

  it('should throw address while getting address', () => {
    let mockdata = [
      {
        "street": "Pan card Road, Baner",
        "addressLine2": "KM Gad Road, Naka",
        "city": "Karad",
        "state": "MAHARASHTRA",
        "pin": "432222",
        "_id": "6496b65a8314b2229deb8f1d"
      }
    ];
    let mockorder = {
      "order": {
        "items": [
          {
            "productId": "63c6205a04d12a4fe7ab50cc",
            "name": "1111",
            "price": 50,
            "qty": 1,
            "subTotal": 50,
            "_id": "64b9346e8314b2229df0c1f5"
          }
        ],
        "deliveryFee": 99,
        "total": 50,
        "address": {
          "street": "Pan card Road, Baner",
          "addressLine2": "KM Gad Road, Naka",
          "city": "Karad",
          "state": "MAHARASHTRA",
          "pin": "432222"
        },
        "paymentStatus": "Pending",
        "status": "Pending",
        "createdBy": "6492b6718314b2229deb245a",
        "deleted": false,
        "_id": "64b9346e8314b2229df0c1f4",
        "createdAt": "2023-07-20T13:19:42.212Z",
        "updatedAt": "2023-07-20T13:19:42.212Z",
        "__v": 0
      }
    }
    component.addressid = 1;
    spyOn(customerservice, 'getaddress').and.returnValue(of(mockdata));
    spyOn(cartservice, 'creat').and.returnValue(throwError({error:{message:'error'}}));
    component.placeorder();
    expect(customerservice.getaddress).toHaveBeenCalled();
    expect(cartservice.creat).toHaveBeenCalled();
  })

  it('throw toaster if customer is not loged in', () => {
    spyOn(component.Toast, 'fire');
    component.placeorder();
    expect(component.Toast.fire).toHaveBeenCalled();
  })
});
