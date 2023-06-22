import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, pluck } from 'rxjs';
import { Product } from '../store/product';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent {

  constructor(private store: Store<{ cart: { product: Product[] } }>) { }

  outputprice: Observable<any> = this.store.select('cart').pipe(pluck('price'));

  deliveryFee = 99;

  placeorder() {
    
  }
}
