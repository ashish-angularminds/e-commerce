import { TestBed } from '@angular/core/testing';
import { CustomerService } from './customer.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
describe('CustomerService', () => {
  let service: CustomerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CustomerService);
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

  it('should register', () => {
    let mockdata = {
      email: 'abc@123.in',
      password: 'abc12345',
      name: 'abc',
      address: {
        street: 'abc',
        addressLine2: 'abc',
        city: 'abc',
        state: 'abc',
        pin: '123456',
      },
      captcha: 'jififjwieew3484348354',
    };
    service.ngOnInit();
    service.set(mockdata).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/shop/auth/register'
    );
    expect(request.request.method).toBe('POST');
    request.flush(mockdata);
  });

  it('should login', () => {
    let mockdata = {
      email: 'abc@123.in',
      password: 'abc12345',
      captcha: 'jififjwieew3484348354',
    };
    service.ngOnInit();
    service.login(mockdata).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/shop/auth/login'
    );
    expect(request.request.method).toBe('POST');
    request.flush(mockdata);
  });

  it('should get user', () => {
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
      _id: '649ab33d8314b2229defb122',
    };
    service.ngOnInit();
    service.get(token).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/shop/auth/self'
    );
    expect(request.request.method).toBe('GET');
    request.flush(mockdata);
  });

  it('should update profile', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    let mockdata = {
      email: 'abc@123.in',
      name: 'abc',
    };
    service.ngOnInit();
    service.updateprofile(token, mockdata).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/customers/update-profile'
    );
    expect(request.request.method).toBe('PATCH');
    request.flush(mockdata);
  });

  it('should update profile', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    let mockdata = new FormData();
    service.ngOnInit();
    service.updateprofileimg(token, mockdata).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/customers/profile-picture'
    );
    expect(request.request.method).toBe('POST');
    request.flush(mockdata);
  });

  it('should remove profile img', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    service.ngOnInit();
    service.removeprofileimg(token).subscribe((data) => {
      expect(data).toEqual({});
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/customers/profile-picture'
    );
    expect(request.request.method).toBe('DELETE');
    request.flush({});
  });

  it('should get address', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    let mockdata = [
      {
        addressLine2: 'Ashish Mahadik',
        city: 'Karad',
        pin: '415108',
        state: 'MAHARASHTRA',
        street: 'KM Gad Road',
        _id: '649ab3f58314b2229defb164',
      },
    ];

    service.ngOnInit();
    service.getaddress(token).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/customers/address'
    );
    expect(request.request.method).toBe('GET');
    request.flush(mockdata);
  });

  it('should add address', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    let mockdata = {
      addressLine2: 'Ashish Mahadik',
      city: 'Karad',
      pin: '415108',
      state: 'MAHARASHTRA',
      street: 'KM Gad Road',
      _id: '649ab3f58314b2229defb164',
    };

    service.ngOnInit();
    service.setaddress(token,mockdata).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/customers/address'
    );
    expect(request.request.method).toBe('POST');
    request.flush(mockdata);
  });

  it('should update address', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    let mockdata = {
      addressLine2: 'Ashish Mahadik',
      city: 'Karad',
      pin: '415108',
      state: 'MAHARASHTRA',
      street: 'KM Gad Road',
      _id: '649ab3f58314b2229defb164',
    };

    service.ngOnInit();
    service.updateaddress(token,mockdata,'649ab3f58314b2229defb164').subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/customers/address/649ab3f58314b2229defb164'
    );
    expect(request.request.method).toBe('PUT');
    request.flush(mockdata);
  });

  it('should delete address', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    let mockdata = {
      addressLine2: 'Ashish Mahadik',
      city: 'Karad',
      pin: '415108',
      state: 'MAHARASHTRA',
      street: 'KM Gad Road',
      _id: '649ab3f58314b2229defb164',
    };

    service.ngOnInit();
    service.deleteaddress(token,'649ab3f58314b2229defb164').subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/customers/address/649ab3f58314b2229defb164'
    );
    expect(request.request.method).toBe('DELETE');
    request.flush(mockdata);
  });

  it('should change password', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    let mockdata = {
      old_password: 'abc12345',
      new_password: 'abc12345'
    };

    service.ngOnInit();
    service.changepassword(token,mockdata).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/customers/auth/change-password'
    );
    expect(request.request.method).toBe('POST');
    request.flush(mockdata);
  });

  it('should delete user', () => {
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDlhYjMzZDgzMTRiMjIyOWRlZmIxMjIiLCJpYXQiOjE2ODg1MzkwNjIsImV4cCI6MTY4ODYyNTQ2MiwidHlwZSI6ImFjY2VzcyJ9.d4bEIUtyv1OKxpH8hmuV__o3agtG0TXFAW4cB5pYDJs';
    let mockdata = {
      createdAt: '2023-06-27T10:00:29.924Z',
      deleted: true,
      email: 'jack@6.in',
      name: 'jack',
      picture:
        'http://res.cloudinary.com/abs-am/image/upload/v1687860145/training-api/eeve0lk0bmtxotrb0j7a.jpg',
      updatedAt: '2023-06-27T10:03:33.938Z',
      _id: '649ab33d8314b2229defb122',
    };

    service.ngOnInit();
    service.deleteaccount(token).subscribe((data) => {
      expect(data).toEqual(mockdata);
    });
    const request = httpMock.expectOne(
      'https://shop-api.ngminds.com/customers/account'
    );
    expect(request.request.method).toBe('DELETE');
    request.flush(mockdata);
  });
});
