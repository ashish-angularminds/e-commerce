import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from '../../service/product/product.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productservice: ProductService, private router: Router, private loader: NgxUiLoaderService) { }

  pagination = {
    sortBy: 'name',
    limit: 10,
    page: 1
  };
  results: any = [];
  des = '';

  ngOnInit(): void {
    this.getproductslist();
  }

  getproductslist() {
    this.loader.start();
    this.productservice.getall(this.pagination).subscribe(
      res => {
        this.results = res.results;
        this.loader.stop();
      },
      err => {
        this.loader.stop();
        console.log(err);
      }
    )
  }

  changePage(id: number) {
    this.pagination.page = this.pagination.page + id;
    if (this.pagination.page == 0) {
      this.pagination.page = 1;
    }
    this.getproductslist();
  }

  oneProduct(id: string) {
    this.router.navigate([`product/one-product/${id}`]);
  }
}
