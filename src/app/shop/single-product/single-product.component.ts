import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { addproduct } from 'src/app/shop/cart/store/cart.actions';
import { Product } from 'src/app/shop/cart/store/product';
import { ProductsService } from '../services/products.service';
import { pluck } from 'rxjs';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor(private service: ProductsService, private store: Store<{ cart: { product: Product[] } }>) { }

  @Input() cartproduct: any;
  selectedimg: any;
  item: any;

  @ViewChild('close', { static: true }) close!: ElementRef;
  @ViewChild('open', { static: true }) open!: ElementRef;
  @Output() trigger = new EventEmitter<ElementRef[]>();

  ngOnInit(): void {
    this.trigger.emit([this.open, this.close]);
    this.service.product.subscribe(res => {
      this.item = res;
    });
  }

  add() {
    let p: Product;
    if (this.item.deal) {
      p = {
        productId: this.item._id,
        name: this.item.name,
        price: this.item.price,
        qty: 1,
        subTotal: this.item.deal.price,
        deal: {
          discount: this.item.deal.discount,
          ends: this.item.deal.ends,
          price: this.item.deal.price
        }
      }
    }
    else {
      p = {
        productId: this.item._id,
        name: this.item.name,
        price: this.item.price,
        qty: 1,
        subTotal: this.item.price
      }
    }
    this.store.dispatch(addproduct({ product: p }));
    this.store.select('cart').subscribe(data => localStorage.setItem('cart', JSON.stringify(data)));
    this.cartproduct = true;
  }

  emptyitem() {
    this.service.product.next(undefined);
  }

}
