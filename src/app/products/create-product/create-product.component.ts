import { Component } from '@angular/core';
import { product } from '../product';
import { ProductService } from 'src/app/service/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  constructor(private productservice: ProductService, private toast: NgToastService) { }

  files = new FormData();
  product = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl()
  });

  onFileSelect(event: any) {
    let e = event.target.files[0];
    this.files.append('images', e);
    document.getElementById('dropdown-menu')!.innerHTML += `<img style="width:100px;height:100px;" class="m-2 rounded" src="${URL.createObjectURL(event.target.files[0])}" />`
  }
  creatproduct() {
    this.files.append('name', this.product.value.name);
    this.files.append('description', this.product.value.description);
    this.files.append('price', this.product.value.price);
    this.productservice.create(this.files).subscribe(
      res => {
        this.toast.success({
          detail: 'Product added successfully',
          duration: 3000
        })
        console.log(res);
      },
      err => {
        this.toast.error({
          summary: err.error.message,
          duration: 3000
        })
        console.log(err);
      })
  }
}
