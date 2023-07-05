import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDeal]'
})
export class DealDirective implements OnInit {

  constructor(private elmRef: ElementRef<any>) { }

  @Input() appDeal: any;
  org: any;
  ngOnInit(): void {
    let ele: HTMLElement = this.elmRef.nativeElement;
    this.org = this.elmRef?.nativeElement?.textContent;
    if (this.appDeal) {
      setInterval(() => {
        ele.innerHTML = this.countdown(this.appDeal, this.org);
      }, 1000);
    }
    else {
      ele.innerHTML = `<strong>${this.org}</strong>`;
    }
  }

  countdown(deal: any, org: string): string {
    let end: Date = new Date(deal.ends);
    let today = new Date();
    let diff = (end.getTime() - today.getTime()) / 1000;
    let day = (Math.ceil(((diff / 3600) / 24) * 1) / 1) - 1;
    let hour = (Math.ceil(((diff / 3600) - day * 24) * 1) / 1) - 1;
    let min = (Math.ceil((diff / 60) - ((day * 1440) + (hour * 60)) * 1) / 1) - 1;
    let sec = (Math.ceil((diff - ((day * 86400) + (hour * 3600) + (min * 60))) * 1) / 1) - 1;
    let output =
      `<strong><del>${org}</del> ₹${deal.price}</strong><br><small>(${deal.discount} discount) 
      <br>Deal ends in ${day}D:${hour}H:${min}M:${sec}S<small>`;
    return output;
  }
}
