import { TestBed } from '@angular/core/testing';
import { OrdersService } from './orders.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(OrdersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get orders list', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    let mockdata = {
      createdAt: '2023-06-27T10:00:29.924Z',
      deleted: false,
      email: 'jack@6.in',
      name: 'jack',
      picture:
        'http://res.cloudinary.com/abs-am/image/upload/v1687860145/training-api/eeve0lk0bmtxotrb0j7a.jpg',
      updatedAt: '2023-06-27T10:03:33.938Z',
      _id: '649ab5208314b2229defb23c',
    };
    service.get(token, { limit: 1 }).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/shop/orders?limit=1'
    );
    expect(request.request.method).toBe('GET');
    request.flush(mockdata);
  });

  it('should get single order', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    let mockdata = {
      createdAt: '2023-06-27T10:08:32.426Z',
      createdBy: '649ab33d8314b2229defb122',
      deleted: false,
      deliveryFee: 99,
      items: [],
      paymentStatus: 'Paid',
      sellerId: '646ca9bbec6d46ce7b8f04df',
      status: 'Dispatched',
      total: 239998,
      transactionNo: '3UN6IJI1',
      updatedAt: '2023-06-27T10:09:02.088Z',
      __v: 0,
      _id: '649ab5208314b2229defb23c',
    };
    service.getsingle(token, '649ab5208314b2229defb23c').subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/shop/orders/649ab5208314b2229defb23c'
    );
    expect(request.request.method).toBe('GET');
    request.flush(mockdata);
  });

  it('should get single order', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    let mockdata = {
      createdAt: '2023-06-27T10:08:32.426Z',
      createdBy: '649ab33d8314b2229defb122',
      deleted: false,
      deliveryFee: 99,
      items: [],
      paymentStatus: 'Refunded',
      sellerId: '646ca9bbec6d46ce7b8f04df',
      status: 'Cancelled',
      total: 239998,
      transactionNo: '3UN6IJI1',
      updatedAt: '2023-06-27T10:09:02.088Z',
      __v: 0,
      _id: '649ab5208314b2229defb23c',
    };
    service.cancel(token, '649ab5208314b2229defb23c').subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/shop/orders/cancel/649ab5208314b2229defb23c'
    );
    expect(request.request.method).toBe('PATCH');
    request.flush(mockdata);
  });

});
