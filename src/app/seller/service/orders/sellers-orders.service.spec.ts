import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SellersOrdersService } from './sellers-orders.service';
import { HttpClient } from '@angular/common/http';

describe('SellersOrdersService', () => {
  let service: SellersOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(SellersOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
