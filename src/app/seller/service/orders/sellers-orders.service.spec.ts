import { TestBed } from '@angular/core/testing';

import { SellersOrdersService } from './sellers-orders.service';

describe('SellersOrdersService', () => {
  let service: SellersOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellersOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
