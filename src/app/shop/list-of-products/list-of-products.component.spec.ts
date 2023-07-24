import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfProductsComponent } from './list-of-products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from '../cart/store/cart.reducer';
import { SingleProductComponent } from '../single-product/single-product.component';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { of, throwError } from 'rxjs';

describe('ListOfProductsComponent', () => {
  let component: ListOfProductsComponent;
  let fixture: ComponentFixture<ListOfProductsComponent>;
  let productsservice: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfProductsComponent, SingleProductComponent],
      imports: [HttpClientTestingModule, StoreModule.forRoot(cartReducer), FormsModule]
      
    })
    .compileComponents();

    productsservice = TestBed.inject(ProductsService);
    fixture = TestBed.createComponent(ListOfProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get product details', () => {
    component.search = 'mock'
    spyOn(productsservice, 'getlist').and.returnValue(of({}));
    component.getproductslist();
    expect(productsservice.getlist).toHaveBeenCalledWith({sortBy: 'name', limit: 10, page: 1, name: 'mock'});
  })

  it('should throw error while getting product details', () => {
    spyOn(productsservice, 'getlist').and.returnValue(throwError({error:{message:'error'}}));
    component.getproductslist();
    expect(productsservice.getlist).toHaveBeenCalledWith({sortBy: 'name', limit: 10, page: 1});
  })

  it('should change the page forword', () => {
    spyOn(component, 'getproductslist');
    component.changePage(1);
    expect(component.getproductslist).toHaveBeenCalled();
  })

  it('should change the page backword', () => {
    spyOn(component, 'getproductslist');
    component.changePage(-1);
    expect(component.getproductslist).toHaveBeenCalled();
  })
  it('should check the cart', () => {
    let mock = component.checkcart({ _id: '' })
    expect(mock).toBeUndefined();
  })
  it('should get detail of single product', () => {
    component.singleProduct([], {});
    expect(component.cartproduct).toEqual({});
  })
});
