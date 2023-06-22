import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addproduct } from 'src/app/cart/store/cart.actions';
import { Product } from 'src/app/cart/store/product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor(private store: Store<{ cart: { product: Product[] } }>) { }

  @Input() product: any;
  @Input() cartproduct: Product | undefined;

  selectedimg: any;
  cartdata: any;

  ngOnInit(): void {
  }

  add() {
    let p: Product = {
      productId: this.product._id,
      name: this.product.name,
      price: this.product.price,
      qty: 1,
      subTotal: this.product.price
    }
    this.store.dispatch(addproduct({ product: p }));
    this.store.select('cart').subscribe(data => localStorage.setItem('cart', JSON.stringify(data)));
    this.cartproduct = p;
  }
}
