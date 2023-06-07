import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productservice: ProductService, private router: Router) { }

  pagination = {
    sortBy: 'name',
    limit: 9,
    page: 1
  };
  results: any = [];
  des = '';
  ngOnInit(): void {
    this.getproductslist();
  }

  loadTitle(str: string) {
    let text = '';
    for (let i = 0; i < 40; i++) {
      text += str[i];
    }
    return text;
  }
  loadDes(str: string) {
    let text = '';
    for (let i = 0; i < 80; i++) {
      text += str[i];
    }
    return text;
  }

  getproductslist() {
    this.productservice.getall(this.pagination).subscribe(
      res => {
        console.log(res);
        this.results = res.results;
      },
      err => {
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
    this.router.navigate([`products/one-product/${id}`]);
  }
}
