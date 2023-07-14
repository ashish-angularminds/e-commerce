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

fdescribe('OneProductComponent', () => {
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

  // it('should ask the delete confirmation', () => {
  //   let mockdata = '6482be598314b2229de9baaf';
  //   spyOn(component, 'deletefun');
  //   spyOn(swap, 'fire');
  //   component.deleteproduct(mockdata);
  //   Swal.clickConfirm();
  //   fixture.detectChanges();
  //   expect(component.deletefun).toHaveBeenCalledWith(mockdata);
  // })

  it('should delete the product', () => {
    let mockdata = '6482c0368314b2229de9bc54';
    spyOn(service, 'delete').and.returnValue(of(''));
    spyOn(router, 'createUrlTree');
    component.deletefun(mockdata);
    expect(service.delete).toHaveBeenCalled();
    expect(router.createUrlTree).toHaveBeenCalledWith(['/product','products-list']);
  })

  it('should throw error while deleting', () => {
    let mockdata = '6482c0368314b2229de9bc54';
    spyOn(service, 'delete').and.returnValue(throwError({error:{message:'mock'}}));
    component.deletefun(mockdata);
    expect(service.delete).toHaveBeenCalled();
  })
});
