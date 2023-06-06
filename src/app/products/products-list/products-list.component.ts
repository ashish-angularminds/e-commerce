import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productservice: ProductService) { }

  pagination = {
    // name: '',
    // sortBy: '',
    limit: 5,
    page: 1
  };
  results:any = [];

  ngOnInit(): void {
    this.getproductslist();
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
}
