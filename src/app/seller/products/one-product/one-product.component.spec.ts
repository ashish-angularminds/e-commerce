import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneProductComponent } from './one-product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxEditorModule } from 'ngx-editor';
import { ProductService } from '../../service/product/product.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

describe('OneProductComponent', () => {
  let component: OneProductComponent;
  let fixture: ComponentFixture<OneProductComponent>;
  let service: ProductService;
  let router: Router;
  let swap;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneProductComponent, UpdateProductComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, NgxEditorModule, NgxDropzoneModule, FormsModule]
    })
      .compileComponents();

    swap = Swal;
    router = TestBed.inject(Router);
    service = TestBed.inject(ProductService);
    fixture = TestBed.createComponent(OneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ask the delete confirmation', () => {
    let mockdata = '6482be598314b2229de9baaf';
    spyOn(component, 'deletefun');
    component.deleteproduct(mockdata);
    Swal.clickConfirm();
    expect(component.deletefun).not.toHaveBeenCalledWith(mockdata);
  })

  it('should delete the product', () => {
    let mockdata = '6482c0368314b2229de9bc54';
    spyOn(service, 'delete').and.returnValue(of(''));
    spyOn(router, 'createUrlTree');
    component.deletefun(mockdata);
    expect(service.delete).toHaveBeenCalled();
    expect(router.createUrlTree).toHaveBeenCalledWith(['/product', 'products-list']);
  })

  it('should throw error while deleting', () => {
    let mockdata = '6482c0368314b2229de9bc54';
    spyOn(service, 'delete').and.returnValue(throwError({ error: { message: 'mock' } }));
    component.deletefun(mockdata);
    expect(service.delete).toHaveBeenCalled();
  })

  it('should load all the data', () => {
    spyOn(service, 'getone').and.returnValue(of({}));
    component.loadall('64a5513f8314b2229df06527');
    fixture.detectChanges();
    expect(service.getone).toHaveBeenCalledWith("64a5513f8314b2229df06527");
  })

  it('should throw error while loading the data', () => {
    spyOn(service, 'getone').and.returnValue(throwError({error:{message:'mock'}}));
    component.loadall('64a5513f8314b2229df06527');
    fixture.detectChanges();
    expect(service.getone).toHaveBeenCalledWith("64a5513f8314b2229df06527");
  })

  it('should call the callback function', () => {
    spyOn(component, 'loadall').and.returnValue();
    component.myCallbackFunction();
    expect(component.loadall).toHaveBeenCalled();
  })

  it('should load data in ngonit', () => {
    spyOn(service, 'getone').and.returnValue(of({}));
    component.ngOnInit();
    expect(service.getone).toHaveBeenCalled();
  })

  it('should throw error while ngonit', () => {
    spyOn(service, 'getone').and.returnValue(throwError({error:{message:'mock'}}));
    component.ngOnInit();
    fixture.detectChanges();
    expect(service.getone).toHaveBeenCalled();
  })
});
