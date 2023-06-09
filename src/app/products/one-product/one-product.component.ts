import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from 'src/app/service/product.service';
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
        this.selectedimg = this.product.images[0].url;
        console.log(res);
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
        setTimeout(() => this.loadall(), 1000);
      });
    })
  }

  myCallbackFunction = (): void => { this.loadall() }
  loadall() {
    this.service.getone(this.id.id).subscribe(
      res => {
        this.product = res;
        this.selectedimg = this.product.images[0].url;
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

  deleteproduct() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(this.id.id).subscribe(
          res => {
            Swal.fire({
              title: 'Product Deleted Successfully!',
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            })
            this.router.navigate(['products']);
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
    });
  }


}
