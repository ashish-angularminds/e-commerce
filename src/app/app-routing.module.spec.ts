import { routes } from "./app-routing.module";
import { TestBed } from "@angular/core/testing";

describe('Router: App', () => {
    let route: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
            ]
        });
        route = routes
    });

    it('should load seller', () => {
        let a: any = routes[0];
        console.log(a.loadChildren());
        expect(a.loadChildren()).toBeTruthy();
    })
    it('should load shop', () => {
        let a: any = routes[1];
        console.log(a.loadChildren());
        expect(a.loadChildren()).toBeTruthy();
    })
});