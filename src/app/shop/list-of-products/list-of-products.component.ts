import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NavbarService } from 'src/app/navbar/service/navbar.service';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/shop/cart/store/product';

interface pag {
  name?: string,
  sortBy: string,
  limit: number,
  page: number
}

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})

export class ListOfProductsComponent implements OnInit {

  constructor(private service: ProductsService, private router: Router, private loader: NgxUiLoaderService,
    private navbar: NavbarService, private store: Store<{ cart: { product: Product[] } }>) { }

  results: any;
  pagination: pag = {
    sortBy: 'name',
    limit: 10,
    page: 1
  }
  des = '';
  search = '';

  ngOnInit(): void {
    this.navbar.flag = false;
    this.loader.start();
    this.getproductslist();
    this.store.select('cart').subscribe(data => this.cartdata = data);
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
    if (this.search.length > 0)
      this.pagination.name = this.search;
    else {
      this.pagination = {
        sortBy: this.pagination.sortBy,
        limit: this.pagination.limit,
        page: this.pagination.page
      }
    }

    this.service.getlist(this.pagination).subscribe(
      res => {
        console.log(res);
        this.results = res.results;
        this.loader.stop();
      },
      err => {
        this.loader.stop();
        console.log(err);
      }
    );
  }

  changePage(id: number) {

    this.pagination.page = this.pagination.page + id;
    if (this.pagination.page == 0) {
      this.pagination.page = 1;
    }
    this.getproductslist();
  }

  cartdata: any;
  checkcart(item: any) {
    let pd: any | undefined;
    console.log(this.cartdata);
    this.cartdata.products.forEach((data: Product) => {
      if (item._id === data.productId) {
        pd = data;
      }
    });
    return pd;
  }

  product: any;
  cartproduct: Product | undefined;
  singleProduct(prod: any, pd: any) {
    this.product = prod;
    this.cartproduct = pd;
  }
}
