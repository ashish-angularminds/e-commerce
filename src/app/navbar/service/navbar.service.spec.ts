import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NavbarService } from './navbar.service';
import { CustomerService } from 'src/app/shop/services/customer/customer.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('NavbarService', () => {
  let service: NavbarService;
  let customerservice: CustomerService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    });
    service = TestBed.inject(NavbarService);
    customerservice = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should change state', () => {
    spyOn(customerservice, 'get').and.returnValue(of({}));
    service.changeprofilestate('dfsokfsifsifhsuidf');
    expect(customerservice.get).toHaveBeenCalledWith('dfsokfsifsifhsuidf');
  })


});
