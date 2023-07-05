import { routes } from "./app-routing.module";
import { TestBed } from "@angular/core/testing";

describe('Router: App', () => {
    let route: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
            ]
        });
        route = routes;
    });

    it('should load seller', () => {
        let a: any = routes[1];
        expect(a.loadChildren()).toBeTruthy();
    })
    it('should load shop', () => {
        let a: any = routes[2];
        expect(a.loadChildren()).toBeTruthy();
    })
});