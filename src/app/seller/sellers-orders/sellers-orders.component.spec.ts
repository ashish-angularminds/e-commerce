import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersOrdersComponent } from './sellers-orders.component';
import { SellersOrdersService } from '../service/orders/sellers-orders.service';
import { ProductsService } from 'src/app/shop/services/products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('SellersOrdersComponent', () => {
  let component: SellersOrdersComponent;
  let fixture: ComponentFixture<SellersOrdersComponent>;
  let sellerorderservice: SellersOrdersService;
  let productsservice: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellersOrdersComponent],
      providers: [SellersOrdersService, ProductsService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();

    sellerorderservice = TestBed.inject(SellersOrdersService);
    productsservice = TestBed.inject(ProductsService);
    fixture = TestBed.createComponent(SellersOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all data', () => {
    let mocktoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZjYTliYmVjNmQ0NmNlN2I4ZjA0ZTIiLCJpYXQiOjE2ODk1NzI3MTksImV4cCI6MTY4OTY1OTExOSwidHlwZSI6ImFjY2VzcyJ9.XnyhNBzofVWybTkbcaBrsjlGUmaPloUq148cHmxguIM';
    spyOn(sellerorderservice, 'get').and.returnValue(of({}));
    spyOn(productsservice, 'getlist').and.returnValue(of({}));
    component.orders = [
      {
        address: {
          street: "KM Gad Road",
          addressLine2: "Ashish Mahadik",
          city: "Karad",
          state: "MAHARASHTRA",
          pin: "415108"
        },
        _id: "64b4e5018314b2229df0bdb3",
        items: [
          {
            productId: "64a5513f8314b2229df06527",
            name: "t1",
            price: 1,
            qty: 1,
            subTotal: 0.67,
            _id: "64b4e5018314b2229df0bdb2"
          }
        ],
        deliveryFee: 99,
        total: 0.67,
        paymentStatus: "Paid",
        status: "Confirmed",
        sellerId: "646ca9bbec6d46ce7b8f04df",
        transactionNo: "ESU8FS7Y",
        createdBy: "649ab33d8314b2229defb122",
        deleted: false,
        createdAt: "2023-07-17T06:51:45.772Z",
        updatedAt: "2023-07-17T06:51:45.772Z",
        __v: 0
      }
    ];
    component.loadall(mocktoken);
    expect(sellerorderservice.get).toHaveBeenCalledWith(mocktoken);
    expect(productsservice.getlist).toHaveBeenCalledWith({ name: 't1' });
  })

  it('should load all data', () => {
    let mocktoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZjYTliYmVjNmQ0NmNlN2I4ZjA0ZTIiLCJpYXQiOjE2ODk1NzI3MTksImV4cCI6MTY4OTY1OTExOSwidHlwZSI6ImFjY2VzcyJ9.XnyhNBzofVWybTkbcaBrsjlGUmaPloUq148cHmxguIM';
    spyOn(sellerorderservice, 'get').and.returnValue(throwError({ error: {} }));
    component.loadall(mocktoken);
    expect(sellerorderservice.get).toHaveBeenCalledWith(mocktoken);
  })

  it('should collect cart products', () => {
    spyOn(productsservice, 'getlist').and.returnValue(of({}));
    component.collectimg({ name: "t1" });
    expect(productsservice.getlist).toHaveBeenCalledWith({ name: "t1" });
  })

  it('should get the image', () => {
    component.images = [{name:'t1',img:'t1'}]
    let temp: any = component.getimages('t1');
    expect(temp).toEqual('t1');
  })

  it('should change action of order', () => {
    spyOn(sellerorderservice, "change").and.returnValue(of({}));
    component.changeaction('','');
    expect(sellerorderservice.change).toHaveBeenCalledWith('','0')
  })

  it('should throw error while changing action of order', () => {
    spyOn(sellerorderservice, "change").and.returnValue(throwError({}));
    component.changeaction('','');
    expect(sellerorderservice.change).toHaveBeenCalledWith('','0')
  })

  it('should open order', () => {
    spyOn(sellerorderservice, 'getsingle').and.returnValue(of({}));
    component.oneorder('');
    expect(sellerorderservice.getsingle).toHaveBeenCalledWith('');
  })

  it('should throw error while open order', () => {
    spyOn(sellerorderservice, 'getsingle').and.returnValue(throwError({}));
    component.oneorder('');
    expect(sellerorderservice.getsingle).toHaveBeenCalledWith('');
  })
});
