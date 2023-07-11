import { routes } from "./seller-routing.module";
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

    it('should load auth', () => {
        let a: any = routes[1];
        expect(a.loadChildren()).toBeTruthy();
    })
    it('should load setting', () => {
        let a: any = routes[2];
        expect(a.loadChildren()).toBeTruthy();
    })
    it('should load products', () => {
        let a: any = routes[3];
        expect(a.loadChildren()).toBeTruthy();
    })
});