import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SellersOrdersService } from './sellers-orders.service';

describe('SellersOrdersService', () => {
  let service: SellersOrdersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SellersOrdersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data', () => {
    let mockdata = {
      limit: 10,
      page: 1,
      results: [],
      totalPages: 1,
      totalResults: 6,
    };
    service.get().subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne('https://shop-api.ngminds.com/orders');
    expect(request.request.method).toBe('GET');
    request.flush(mockdata);
  });

  it('should get single order data', () => {
    let mockdata = {
      address: {
        street: 'Bumkar Chowk',
        addressLine2: 'Big Building',
        city: 'Wakad',
        state: 'Maharashtra',
        pin: '411110',
      },
      createdAt: '2023-06-23T12:35:16.534Z',
      createdBy: '648c59008314b2229deaa3e1',
      deleted: false,
      deliveryFee: 99,
      items: [],
      paymentStatus: 'Refunded',
      sellerId: '646ca9bbec6d46ce7b8f04df',
      status: 'Cancelled',
      total: 71999,
      transactionNo: 'TSAFKNG6',
      updatedAt: '2023-06-27T07:49:06.020Z',
      __v: 0,
      _id: '649591848314b2229deb7e30',
    };
    let id = '649591848314b2229deb7e30';
    service.getsingle(id).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      `https://shop-api.ngminds.com/orders/${id}`
    );
    expect(request.request.method).toBe('GET');
    request.flush(mockdata);
  });

  it('should change order status', () => {
    let mockdata = {
      order: {
        address: {
          street: 'KM Gad Road',
          addressLine2: 'Ashish Mahadik',
          city: 'Karad',
          state: 'MAHARASHTRA',
          pin: '415108',
        },
        createdAt: '2023-06-27T10:08:32.426Z',
        createdBy: '649ab33d8314b2229defb122',
        deleted: false,
        deliveryFee: 99,
        items: [],
        paymentStatus: 'Paid',
        sellerId: '646ca9bbec6d46ce7b8f04df',
        status: 'Delivered',
        total: 239998,
        transactionNo: '3UN6IJI1',
        updatedAt: '2023-07-07T10:00:09.744Z',
        __v: 0,
        _id: '649ab5208314b2229defb23c',
      }
    };
    let id = '649591848314b2229deb7e30';
    let action = 'deliver';
    service.change(id, action).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      `https://shop-api.ngminds.com/orders/${action}/${id}`
    );
    expect(request.request.method).toBe('PATCH');
    request.flush(mockdata);
  });
});
