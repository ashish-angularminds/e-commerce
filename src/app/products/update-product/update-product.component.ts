import { Component, Input, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private service: ProductService, private toast: NgToastService) { }

  files = new FormData();
  product = {
    name: '',
    description: '',
    price: ''
  }
  images: any = [];
  @Input() id = '';

  onFileSelect(event: any) {
    let e = event.target.files[0];
    this.files.append('new_images', e);
    document.getElementById('img-box')!.innerHTML += `<img style="width:100px;height:100px;" class="img-thumbnail object-fit-contain m-2" src="${URL.createObjectURL(event.target.files[0])}" />`
  }

  deleteimg(id: string, event: any) {
    this.files.append('delete', id);
    console.log(event);
    event.target.parentNode.innerHTML = '';
  }

  updatedetails() {
    this.service.update(this.id, this.product).subscribe(
      res => {
        console.log(res);
        this.toast.success({
          detail: 'Detail Updated Successfully',
          duration: 3000
        })
      },
      err => {
        console.log(err);
        this.toast.error({
          summary: err.error.message,
          duration: 3000
        })
      }
    );
  }

  updateimg() {
    this.service.updateimg(this.id, this.files).subscribe(
      res => {
        console.log(res);
        this.toast.success({
          detail: 'Images Updated Successfully',
          duration: 3000
        });
      },
      err => {
        console.log(err);
        this.toast.error({
          summary: err.error.message,
          duration: 3000
        });
      }
    )
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.service.getone(this.id).subscribe(
        res => {
          this.product.name = res.name;
          this.product.description = res.description;
          this.product.price = res.price;
          this.images = res.images;
        },
        err => {
          console.log(err);
        }
      )
    }, 1500);

  }
}
