import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders/orders.service';
import { ProductsService } from 'src/app/shop/services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private service: OrdersService, private ProductsService: ProductsService) { }

  orders: any;
  single: any;
  images: any = [];

  ngOnInit(): void {
    this.loadall();
  }

  loadall() {
    this.service.get(localStorage.getItem('loginuser')!).subscribe(data => {
      this.orders = data.results;
      this.orders.forEach((item: any) => {
        item.items.forEach((it: any) => {
          this.ProductsService.getlist({ name: it.name }).subscribe(data => {
            this.images.push({
              name: it.name,
              img: data.results[0]?.images[0]?.url
            });
          });
        })
      })
    })
  }

  oneorder(item: any) {
    // console.log(item);
    this.single = item;
    this.single.items.forEach((data: any) => {
      this.ProductsService.getlist({ name: data.name }).subscribe(data => {
        this.images.push(data);
      });
    })
  }

  getimages(n: string) {
    let img;
    this.images.forEach((data: any) => {
      if (data.name === n) {
        img = data.img;
      }
    });
    return img;
  }

  cancelorder(id: string) {
    this.service.cancel(localStorage.getItem('loginuser')!, id).subscribe(
      res => {
        console.log(res);
        this.loadall();
      },
      err => {
        console.log(err);
      }
    );
  }

}
