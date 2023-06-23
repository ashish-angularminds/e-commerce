import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../store/product';
import { addproduct, checkprice, decreaseqty, increaseqty, removeproduct } from '../store/cart.actions';
import { Observable, pluck } from 'rxjs';
import { CustomerService } from '../../services/customer/customer.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(private service: CustomerService, private store: Store<{ cart: { product: Product[] } }>) { }

  outputproducts$: Observable<any> = this.store.select('cart').pipe(pluck('products'));
  storelogin: Observable<any> = this.store.select('cart').pipe(pluck('login'));
  address = this.service.getaddress(localStorage.getItem('loginuser')!);

  i = 0;
  id: any;
  ngOnInit(): void {

  }

  inc(id: string) {
    console.log(id)
    this.store.dispatch(increaseqty({ productId: id }));
    this.store.dispatch(checkprice());
    this.store.select('cart').subscribe(data => localStorage.setItem('cart', JSON.stringify(data)));
  }

  dec(id: string, qty: number) {
    if (qty <= 1) {
      this.store.dispatch(removeproduct({ productId: id }));
      this.store.select('cart').subscribe(data => localStorage.setItem('cart', JSON.stringify(data)));
    }
    else {
      this.store.dispatch(decreaseqty({ productId: id }));
      this.store.dispatch(checkprice());
      this.store.select('cart').subscribe(data => localStorage.setItem('cart', JSON.stringify(data)));
    }
  }
}
