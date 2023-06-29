import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDeal]'
})
export class DealDirective implements OnInit {

  constructor(private elmRef: ElementRef) { }

  @Input() appDeal: any;

  ngOnInit(): void {
    let org = this.elmRef.nativeElement.textContent;
    if (this.appDeal) {
      let end: Date = new Date(this.appDeal?.ends);
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
        let str = 'Deal ends in ' + day + 'Days ' + hour + ':' + min + ':' + sec;
        this.elmRef.nativeElement.innerHTML = `<strong><del>${org}</del> ₹${this.appDeal?.price}</strong> <br><small>(${this.appDeal?.discount} discount) <br>${str}<small>`;
      }, 1000)
    }
    else {
      this.elmRef.nativeElement.innerHTML = `<strong>${org}</strong>`;
    }
  }
}
