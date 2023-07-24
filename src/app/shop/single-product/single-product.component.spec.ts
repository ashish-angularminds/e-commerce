import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductComponent } from './single-product.component';
import { Store, StoreModule } from '@ngrx/store';
import { cartReducer } from '../cart/store/cart.reducer';
import { ProductsService } from '../services/products.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedmoduleModule } from 'src/app/sharedmodule/sharedmodule.module';
import { addproduct } from '../cart/store/cart.actions';

describe('SingleProductComponent', () => {
  let component: SingleProductComponent;
  let fixture: ComponentFixture<SingleProductComponent>;
  let service: ProductsService;
  let store: Store;
  let mockdata = {
    _id: "63c6215b04d12a4fe7ab50f0",
    name: "Batch10",
    description: "we are universe",
    images: [
      {
        "public_id": "training-api/vnkvtohtpsgt20fvc8vd",
        "url": "http://res.cloudinary.com/abs-am/image/upload/v1673929051/training-api/vnkvtohtpsgt20fvc8vd.jpg"
      }
    ],
    price: 120000,
    deal: {
      discount: "17%",
      price: 99600,
      ends: "2023-07-26T16:09:20.103Z"
    }
  }
  let mockproduct = {
    productId: "63c6215b04d12a4fe7ab50f0",
    name: "Batch10",
    price: 120000,
    qty: 1,
    subTotal: 99600,
    deal: {
      discount: "17%",
      price: 99600,
      ends: "2023-07-26T16:09:20.103Z"
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleProductComponent],
      imports: [StoreModule.forRoot(cartReducer), HttpClientTestingModule, SharedmoduleModule],
      providers: [ProductsService]
    })
      .compileComponents();

    store = TestBed.inject(Store);
    service = TestBed.inject(ProductsService);
    fixture = TestBed.createComponent(SingleProductComponent);
    component = fixture.componentInstance;
    component.selectedimg = 'mock';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all data', () => {
    component.ngOnInit();
    expect(component.item).toBeUndefined();
  })
  it('should add product to the cart', () => {
    service.product.next(mockdata);
    spyOn(store, 'dispatch');
    component.add();
    expect(store.dispatch).toHaveBeenCalledWith(addproduct({ product: mockproduct }))
    expect(component.cartproduct).toEqual(true);
  })
  it('should empty the cart', () => {
    component.emptyitem();
    service.product.subscribe(data => {
      expect(data).toBeUndefined();
    })
  })
});
