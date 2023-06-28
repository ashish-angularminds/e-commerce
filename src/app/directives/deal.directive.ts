import { CurrencyPipe } from '@angular/common';
import { Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { CustomeCurrencyPipe } from '../pipe/custome-currency.pipe';

@Directive({
  selector: '[appDeal]'
})
export class DealDirective implements OnInit {

  constructor(private renderer: Renderer2, private elmRef: ElementRef) { }

  @Input() appDeal: any;

  ngOnInit(): void {
    let end: Date = new Date(this.appDeal?.ends);
    let org = this.elmRef.nativeElement.textContent;
    setInterval(() => {
      let today = new Date();
      let diff = (end.getTime() - today.getTime()) / 1000;
      let day = (Math.ceil(((diff / 3600) / 24) * 1) / 1) - 1;
      let hour = (diff / 3600) - day * 24;
      hour = (Math.ceil(hour * 1) / 1) - 1;
      let min = (diff / 60) - ((day * 1440) + (hour * 60));
      min = (Math.ceil(min * 1) / 1) - 1;
      let sec = diff - ((day * 86400) + (hour * 3600) + (min * 60));
      sec = (Math.ceil(sec * 1) / 1) - 1;


      if (diff >= 0) {
        let str = 'Deal ends in ' + day + 'Days ' + hour + ':' + min + ':' + sec;

        this.elmRef.nativeElement.innerHTML = `<strong><del>${org}</del> ₹${this.appDeal?.price}</strong> <br><small>(${this.appDeal?.discount} discount) <br>${str}<small>`;
      }
      else {
        this.elmRef.nativeElement.innerHTML = `<strong>${org}</strong>`;
      }

    }, 1000)
  }



  // console.log(end.getFullYear(), end.getMonth(), end.getDate(), end.getSeconds());
  // console.log(today.getFullYear(), today.getMonth(), today.getDate());
  // console.log(diff);
  // console.log('.');
}
