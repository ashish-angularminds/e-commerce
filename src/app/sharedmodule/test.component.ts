import { Component } from "@angular/core";

@Component({
    template: `<div [appDeal]="deal"></div>`
})
export class TestComponent {
    deal = {
        ends: "2023-08-05T17:31:13.868Z",
        price: 10,
        discount: '0%'
    }
}