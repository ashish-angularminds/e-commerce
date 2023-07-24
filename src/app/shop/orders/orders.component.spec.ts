import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { OrdersService } from '../services/orders/orders.service';
import { ProductsService } from '../services/products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let orderservice: OrdersService;
  let productsservice: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrdersComponent],
      providers: [OrdersService, ProductsService],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    localStorage.setItem('loginuser', 'mock');
    productsservice = TestBed.inject(ProductsService);
    orderservice = TestBed.inject(OrdersService);
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all data', () => {
    spyOn(orderservice, 'get').and.returnValue(of({results: [{items: [{name: "mock"}]}]}) );
    spyOn(productsservice, 'getlist').and.returnValue(of({results: [{images: [{url: "http"}]}]}));
    component.loadall();
    expect(orderservice.get).toHaveBeenCalledWith('mock', { limit: 100 });
    expect(productsservice.getlist).toHaveBeenCalledWith({ name: 'mock' });

  })

  it('should set single product details', () => {
    component.oneorder({});
    expect(component.single).toEqual({});
  })

  it('should get images of the product', () => {
    component.images = [{ name: 'mock', img: 'mock' }];
    let ret:any = component.getimages('mock');
    expect(ret).toEqual('mock');
  })

  it('should cancel the order', () => {
    spyOn(orderservice, 'cancel').and.returnValue(of({}));
    spyOn(component, 'loadall');
    component.cancelorder('mock');
    expect(orderservice.cancel).toHaveBeenCalledWith('mock', 'mock');
    expect(component.loadall).toHaveBeenCalled();
  })
  it('should throw error while cancel the order', () => {
    spyOn(orderservice, 'cancel').and.returnValue(throwError({error:{}}));
    component.cancelorder('mock');
    expect(orderservice.cancel).toHaveBeenCalledWith('mock', 'mock');
  })
});
