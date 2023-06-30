import { Component } from "@angular/core";

@Component({
    template: `<div appDeal="deal"></div>`
})
export class TestComponent {
    deal = {
        end: "",
        price: 0,
        discount: ''
    }
}