import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  constructor(private activated: ActivatedRoute, private service: ProductService,
    private router: Router, private toast: NgToastService) { }

  product: any;
  selectedimg: any;

  ngOnInit(): void {
    let id: any = this.activated.snapshot.params;
    this.service.getone(id.id).subscribe(
      res => {
        this.product = res;
        this.selectedimg = this.product.images[0].url;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );


    document.querySelectorAll('.btn-success').forEach(i => {
      i.addEventListener('click', () => {
        setTimeout(() => this.loadall(), 1000);
      });
    })
  }

  loadall() {
    console.log('loaded');
    let id: any = this.activated.snapshot.params;
    this.service.getone(id.id).subscribe(
      res => {
        this.product = res;
        this.selectedimg = this.product.images[0].url;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteProduct() {
    this.service.delete(this.product._id).subscribe(
      res => {
        this.toast.success({
          detail: 'Product Deleted Successfully',
          duration: 3000
        })
        this.router.navigate(['products']);
      },
      err => {
        this.toast.error({
          summary: err.error.message,
          duration: 3000
        })
      }
    )
  }
}
