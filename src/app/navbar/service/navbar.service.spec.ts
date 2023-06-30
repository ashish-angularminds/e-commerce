import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NavbarService } from './navbar.service';
import { CustomerService } from 'src/app/shop/services/customer/customer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('NavbarService', () => {
  let service: NavbarService;
  let customerservice: CustomerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    });
    service = TestBed.inject(NavbarService);
    httpMock = TestBed.inject(HttpTestingController);
    customerservice = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should change state', () => {
    service.customerlogin = localStorage.getItem('loginuser');
    service.changeprofilestate();
    if (service.customerlogin) {
      expect(service.customerlogin).not.toBeNull;
    }
    else {
      expect(service.customerlogin).toBeNull();
    }
  })

  it('should get res', fakeAsync(() => {
    // spyOn(customerservice, 'get').and.returnValue(of({}))
    let mockdata = {
      createdAt: "2023-06-27T10:00:29.924Z",
      deleted: false,
      email: "jack@6.in",
      name: "jack",
      picture: "http://res.cloudinary.com/abs-am/image/upload/v1687860145/training-api/eeve0lk0bmtxotrb0j7a.jpg",
      updatedAt: "2023-06-27T10:03:33.938Z",
      _id: "649ab33d8314b2229defb122"
    }
    customerservice.get(localStorage.getItem('loginuser')!).subscribe(res => {
      expect(res).toEqual(mockdata);
      service.img = res.picture;
      expect(service.img).toEqual('http://res.cloudinary.com/abs-am/image/upload/v1687860145/training-api/eeve0lk0bmtxotrb0j7a.jpg');
    })
    tick(1000);
    const request = httpMock.expectOne('https://shop-api.ngminds.com/shop/auth/self');
    expect(request.request.method).toBe('GET');
    request.flush(mockdata);
  }));
});
