import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Editor, Toolbar } from 'ngx-editor';
import { ProductService } from '../../service/product/product.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private service: ProductService, private toast: NgToastService, private activated: ActivatedRoute) { }

  @Input() callbackFunction = (): void => { };
  product = {
    name: '',
    description: '',
    price: ''
  }
  images: any = [];
  id: any;


  onFileSelect(event: any) {
    let files = new FormData();
    let f: File[] = [];
    f.push(...event.addedFiles);
    f.forEach(item => {
      files.append('new_images', item);
    })
    // for (let i = 0; i < f.length - 1; i++) {
    //   files.append('new_images', f[i]);
    // }
    // f.forEach((e: any) => {
    //   files.append('new_images', e);
    // });
    this.updateimg(files);
  }

  deleteimg(id: string) {
    let files = new FormData();
    files.append('delete', id);
    this.updateimg(files);
  }

  updatedetails() {
    this.service.update(this.id, this.product).subscribe(
      res => {
        Swal.fire({
          title: 'Detail Updated Successfully!',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        });
        this.loadimg();
      },
      err => {
        Swal.fire({
          title: 'Error!',
          text: err.error.message,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    );
  }

  updateimg(file: FormData) {
    this.service.updateimg(this.id, file).subscribe(
      res => {
        Swal.fire({
          title: 'Images Updated Successfully!',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        });
        this.loadimg();
      },
      err => {
        Swal.fire({
          title: 'Error!',
          text: err.error.message,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
      }
    )
  }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params;
    this.id = this.id.id;
    this.loadimg();
    this.editor = new Editor();
  }

  editor: any;
  html = '';

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


  loadimg() {
    this.service.getone(this.id).subscribe(
      res => {
        this.product.name = res.name;
        this.product.description = res.description;
        this.product.price = res.price;
        this.images = res.images;
        this.callbackFunction();
      },
      err => {
        Swal.fire({
          title: 'Error!',
          text: err.error.message,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        });
        console.log(err);
      }
    );
  }

  onRemove(event: any) {
    console.log(event);
  }

  
}