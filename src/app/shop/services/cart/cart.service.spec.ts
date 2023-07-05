import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

fdescribe('CartService', () => {
  let service: CartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CartService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a header', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    service.setheader(token);
    expect(service.setheader(token)).toBeTruthy();
  });

  it('should create order', () => {
    let mockdata = {
      items: [{}],
      deliveryFee: 99,
      total: 99,
      address: {},
    };
    let responcedata = {
      order: {
        address: {
          addressLine2: 'Ashish Mahadik',
          city: 'Karad',
          pin: '415108',
          state: 'MAHARASHTRA',
          street: 'KM Gad Road',
        },
        createdAt: '2023-07-05T13:51:02.386Z',
        createdBy: '649ab33d8314b2229defb122',
        deleted: false,
        deliveryFee: 99,
        items: [{}],
        paymentStatus: 'Pending',
        status: 'Pending',
        total: 100,
        updatedAt: '2023-07-05T13:51:02.386Z',
        __v: 0,
        _id: '64a575468314b2229df0660b',
      }
    };
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    service.creat(token, mockdata).subscribe((data) => {
      expect(data).toEqual(responcedata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/shop/orders'
    );
    expect(request.request.method).toBe('POST');
    request.flush(responcedata);
  });

  it('should make payment', () => {
    let mockdata = {
      nameOnCard: 'abc',
      cardNumber: '4111111111111111',
      expiry: '12/2023',
      cvv: '123',
    };
    let responcedata = {
      order: {
        address: {
          addressLine2: 'Ashish Mahadik',
          city: 'Karad',
          pin: '415108',
          state: 'MAHARASHTRA',
          street: 'KM Gad Road',
        },
        createdAt: '2023-07-05T13:51:02.386Z',
        createdBy: '649ab33d8314b2229defb122',
        deleted: false,
        deliveryFee: 99,
        items: [{}],
        paymentStatus: 'Paid',
        status: 'Confirmed',
        total: 100,
        updatedAt: '2023-07-05T13:51:02.386Z',
        __v: 0,
        _id: '64a575468314b2229df0660b',
      },
    };
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    service
      .pay(token, mockdata, '64a575468314b2229df0660b')
      .subscribe((data) => {
        expect(data).toEqual(responcedata);
      });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/shop/orders/confirm/64a575468314b2229df0660b'
    );
    expect(request.request.method).toBe('PUT');
    request.flush(responcedata);
  });
});
