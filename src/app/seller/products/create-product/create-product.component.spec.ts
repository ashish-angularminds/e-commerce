import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProductComponent } from './create-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from '../../service/product/product.service';
import { NgxEditorModule } from 'ngx-editor';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;
  let loader: NgxUiLoaderService;
  let productservice: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateProductComponent],
      imports: [HttpClientTestingModule, NgxEditorModule, NgxDropzoneModule, FormsModule],
      providers: [ProductService ,NgxUiLoaderService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestBed.inject(NgxUiLoaderService);
    productservice = TestBed.inject(ProductService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should store images', () => {
    let a:any = new Event('upload');
    component.onFileSelect({addedFiles:[new Blob]});
    fixture.detectChanges();
    let b = new FormData();
    b.append('new_images', a);
    expect(component.files).toEqual(b);
  })

  it('should create the product', () => {
    let mockdata = new FormData();
    spyOn(loader, 'start');
    spyOn(loader, 'stop');
    spyOn(productservice, 'create').and.returnValue(of({}));
    component.creatproduct();
    fixture.detectChanges();
    expect(loader.start).toHaveBeenCalled();
    expect(loader.stop).toHaveBeenCalled();
    expect(productservice.create).toHaveBeenCalledWith(mockdata);
  });

  it('should throw error while create call', () => {
    let mockdata = new FormData();
    spyOn(loader, 'start');
    spyOn(loader, 'stop');
    spyOn(productservice, 'create').and.returnValue(throwError({error:{message:'mock'}}));
    component.creatproduct();
    fixture.detectChanges();
    expect(loader.start).toHaveBeenCalled();
    expect(loader.stop).toHaveBeenCalled();
    expect(productservice.create).toHaveBeenCalledWith(mockdata);
  })
});
