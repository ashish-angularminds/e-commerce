import { Component, OnInit } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { ProductService } from 'src/app/service/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productservice: ProductService, private loader: NgxUiLoaderService) { }

  files = new FormData();
  product = ({
    name: '',
    description: '',
    price: '',
  });
  images: any[] = [];

  onFileSelect(event: any) {
    let f: File[] = [];
    f.push(...event.addedFiles);
    f.forEach(item => {
      this.images.push(URL.createObjectURL(item));
      this.files.append('new_images', item);
    });
    console.log(event);
  }
  creatproduct() {
    this.loader.start();
    this.files.append('name', this.product.name);
    this.files.append('description', this.product.description || '');
    this.files.append('price', this.product.price);
    this.productservice.create(this.files).subscribe(
      res => {
        Swal.fire({
          title: 'Product Added Successfully!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
        this.product.description = '';
        this.product.name = '';
        this.product.price = '';
        document.getElementById('imgpre')!.innerHTML = '';
        this.files = new FormData();
        this.loader.stop();
      },
      err => {
        Swal.fire({
          title: 'Error!',
          text: err.error.message,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        })
        console.log(err);
        this.loader.stop();
      })
  }

  editor: any;
  html = '';
  ngOnInit(): void {
    this.editor = new Editor();
  }

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
}
