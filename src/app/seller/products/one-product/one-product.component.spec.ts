import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneProductComponent } from './one-product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxEditorModule } from 'ngx-editor';

fdescribe('OneProductComponent', () => {
  let component: OneProductComponent;
  let fixture: ComponentFixture<OneProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneProductComponent, UpdateProductComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, NgxEditorModule, NgxDropzoneModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
