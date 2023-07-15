import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from '../../service/product/product.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  constructor(private activated: ActivatedRoute, private service: ProductService,
    private router: Router, private loader: NgxUiLoaderService) { }

  product: any;
  selectedimg: any;
  id: any;
  ngOnInit(): void {
    this.loader.start();
    this.id = this.activated.snapshot.params;
    this.service.getone(this.id.id).subscribe(
      res => {
        this.product = res;
        this.selectedimg = this.product?.images?.at(0)?.url;
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
      }
    );


    document.querySelectorAll('.btn-success').forEach(i => {
      i.addEventListener('click', () => {
        setTimeout(() => this.loadall(this.id.id), 1000);
      });
    })
  }

  myCallbackFunction = (): void => { this.loadall(this.id.id) }
  loadall(id:string) {
    this.service.getone(id).subscribe(
      res => {
        console.log(res);
        this.product = res;
        this.selectedimg = this.product?.images?.at(0)?.url;
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
      }
    );
  }

  deleteproduct(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })?.then((result) => {
      if (result.isConfirmed) {
        this.deletefun(id);
      }
    });
  }

  deletefun(id:string) {
    this.service.delete(id).subscribe({
      next: (res) => {
        Swal.fire({
          title: 'Product Deleted Successfully!',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.createUrlTree(['/product','products-list']);
      },
      error: (err) => {
        Swal.fire({
          title: 'Error!',
          text: err.error?.message,
          icon: 'error',
          showConfirmButton: false,
          timer: 2000
        })
        console.log(err);
      }
    });
  }

}
