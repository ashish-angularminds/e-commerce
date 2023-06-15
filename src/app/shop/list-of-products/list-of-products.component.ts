import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { pluck } from 'rxjs';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit {

  constructor(private service:ProductsService, private router: Router, private loader: NgxUiLoaderService){}

  results:any;
  pagination={
    // name:'',
    sortBy:'name',
    limit:5,
    page:1
  }
  des = '';

  ngOnInit(): void {
    this.loader.start();
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

  oneProduct(id: string) {
    this.router.navigate(['single-product',`${id}`]);
  }
}
