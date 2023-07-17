import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateProductComponent } from './update-product.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/product/product.service';
import { of, throwError } from 'rxjs';

describe('UpdateProductComponent', () => {
  let component: UpdateProductComponent;
  let fixture: ComponentFixture<UpdateProductComponent>;
  let service: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateProductComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, NgxDropzoneModule, NgxEditorModule, FormsModule]
    })
    .compileComponents();

    service = TestBed.inject(ProductService);
    fixture = TestBed.createComponent(UpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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

  it('should delete temp image', () => {
    component.deletetempimg(0);
    expect(component.tempfiles).toEqual([]);
  })

  it('should delete image', () => {
    component.deleteimg('fdfdfd', 1);
    expect(component.files).toEqual(new FormData());
  })

  it('should update the details', () => {
    let mockproduct = {
      name: '',
      description: '',
      price: ''
    }
    spyOn(service, 'update').and.returnValue(of({}));
    component.updatedetails('123');
    expect(service.update).toHaveBeenCalledWith('123', mockproduct);
  })
  it('should update the details', () => {
    let mockproduct = {
      name: '',
      description: '',
      price: ''
    }
    spyOn(service, 'update').and.returnValue(throwError({error:{message:'mock'}}));
    component.updatedetails('123');
    expect(service.update).toHaveBeenCalledWith('123', mockproduct);
  })

  it('should update the images', () => {
    let mockdata = new FormData();
    spyOn(service, 'updateimg').and.returnValue(of({}));
    let temp = new File([""], "filename", { type: 'text/html' });
    component.tempfiles = [temp];
    component.updateimg('123');
    expect(component.files).toEqual(new FormData());
    expect(service.updateimg).toHaveBeenCalledWith('123', mockdata);
  })

  it('should throw error while updating images', () => {
    let mockdata = new FormData();
    spyOn(service, 'updateimg').and.returnValue(throwError({error:{message:'error'}}));
    component.updateimg('123');
    expect(component.files).toEqual(new FormData());
    expect(service.updateimg).toHaveBeenCalledWith('123', mockdata);
  })

  it('should load all images', () => {
    spyOn(service, 'getone').and.returnValue(of({}));
    spyOn(component, 'callbackFunction');
    component.loadimg('123');
    expect(service.getone).toHaveBeenCalledWith('123');
    expect(component.callbackFunction).toHaveBeenCalled();
  })

  it('should load all images', () => {
    spyOn(service, 'getone').and.returnValue(throwError({error:{message:'error'}}));
    component.loadimg('123');
    expect(service.getone).toHaveBeenCalledWith('123');
  })
});
