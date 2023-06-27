import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersOrdersComponent } from './sellers-orders.component';

describe('SellersOrdersComponent', () => {
  let component: SellersOrdersComponent;
  let fixture: ComponentFixture<SellersOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellersOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
