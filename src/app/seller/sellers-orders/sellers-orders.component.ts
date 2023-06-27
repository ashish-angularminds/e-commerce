import { Component, OnInit } from '@angular/core';
import { SellersOrdersService } from '../service/orders/sellers-orders.service';
import { ProductsService } from 'src/app/shop/services/products.service';

@Component({
  selector: 'app-sellers-orders',
  templateUrl: './sellers-orders.component.html',
  styleUrls: ['./sellers-orders.component.css']
})
export class SellersOrdersComponent implements OnInit {

  constructor(private service: SellersOrdersService, private ProductsService: ProductsService) { }

  orders: any;
  single: any;
  images: any = [];

  ngOnInit(): void {
    this.loadall();
  }

  loadall() {
    this.service.get().subscribe(
      res => {
        this.orders = res.results;
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
      },
      err => {
        console.log(err);
      }
    );
  }



  getimages(str: any) {
    let img;
    this.images.forEach((data: any) => {
      if (data.name === str) {
        img = data.img;
      }
    });
    return img;
  }

  changeaction(id: string) {
    let temp: any = document.getElementById('selectaction');
    if (temp?.value === '0') {
      alert('select an action');
    }
    else {
      this.service.change(id, temp?.value).subscribe(
        res => {
          console.log(res);
          this.single = res.order;
          this.loadall();
        },
        err => {
          console.log(err);
        }
      );
    }
    console.log(temp?.value)
  }

  oneorder(id: string) {
    this.service.getsingle(id).subscribe(
      res => {
        this.single = res[0];
      },
      err => {
        console.log(err);
      }
    );
  }
}
