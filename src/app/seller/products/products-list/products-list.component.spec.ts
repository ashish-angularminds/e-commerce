import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsListComponent } from './products-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/product/product.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let productservice: ProductService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [HttpClientTestingModule, FormsModule]
    })
    .compileComponents();

    router = TestBed.inject(Router);
    productservice = TestBed.inject(ProductService);
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all product list', () => {
    spyOn(productservice, 'getall').and.returnValue(of({}));
    component.getproductslist();
    expect(productservice.getall).toHaveBeenCalledWith({
      sortBy: 'name',
      limit: 10,
      page: 1
    });
  })

  it('should throw error while service call', () => {
    spyOn(productservice, 'getall').and.returnValue(throwError({error:{message:'mock'}}));
    component.getproductslist();
    expect(productservice.getall).toHaveBeenCalled();
  })

  it('should change the page', () => {
    spyOn(component, 'getproductslist');
    component.changePage(-1);
    expect(component.getproductslist).toHaveBeenCalled();
    expect(component.pagination.page).toEqual(1);
  })

  it('should navigate to one product route', () => {
    let id = 'fhsdvfsdfbsdfg';
    spyOn(router, 'navigate');
    component.oneProduct(id);
    expect(router.navigate).toHaveBeenCalledWith([`product/one-product/${id}`]);
  })
});
