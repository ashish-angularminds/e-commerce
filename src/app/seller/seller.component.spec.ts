import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerComponent } from './seller.component';
import { SellerRoutingModule } from './seller-routing.module';

describe('SellerComponent', () => {
  let component: SellerComponent;
  let fixture: ComponentFixture<SellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerComponent],
      imports: [SellerRoutingModule]
    });
    fixture = TestBed.createComponent(SellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
