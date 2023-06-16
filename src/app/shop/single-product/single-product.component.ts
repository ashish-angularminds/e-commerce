import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() product: any;
  selectedimg: any;

  ngOnInit(): void {
    // this.selectedimg = this.product.images.get(0).url;
    // console.log(this.product.images[0]);
  }
}
