import { TestBed } from "@angular/core/testing";
import { Store, StoreModule } from "@ngrx/store";
import { cartReducer } from "./cart.reducer";
import { addproduct, checklogin, checkprice, decreaseqty, emptycart, increaseqty, removeproduct } from "./cart.actions";
import { initalstate } from "./cart.state";
import { pluck } from "rxjs";

describe('CartReducer', () => {
    let store: Store<any>
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot(cartReducer)]
        })
            .compileComponents();
    
        store = TestBed.inject(Store);
    });

    it('should add product to cart', () => {
        let mockproduct = {
            productId: "63c6215b04d12a4fe7ab50f0",
            name: "mock",
            price: 120000,
            qty: 1,
            subTotal: 99600,
            deal: {
              discount: "17%",
              price: 99600,
              ends: "2023-07-26T16:09:20.103Z"
            }
        }
        let mockproduct2 = {
            productId: "63c6215b04d12a4fe7ab50f0",
            name: "mock",
            price: 120000,
            qty: 1,
            subTotal: 99600
        }
        let action = addproduct({ product: mockproduct });
        const newState = cartReducer(initalstate, action);

        action = addproduct({ product: mockproduct2 });
        cartReducer(newState, action);
        expect(newState.products).toContain(mockproduct);
    });

    it('should remove product from cart', () => {
        let mockproduct1 = {
            productId: "63c6215b04d12a4fe7ab50f0",
            name: "mock",
            price: 120000,
            qty: 1,
            subTotal: 99600
        }
        let mockproduct2 = {
            productId: "63c6215b04d12a4fe7ab50f1",
            name: "mock",
            price: 120000,
            qty: 1,
            subTotal: 99600
        }
        let addaction = addproduct({ product: mockproduct1 });
        let newState = cartReducer(initalstate, addaction);
        addaction = addproduct({ product: mockproduct2 });
        newState = cartReducer(newState, addaction);

        let rmaction = removeproduct({productId: "63c6215b04d12a4fe7ab50f0"});
        newState = cartReducer(newState, rmaction);
        expect(newState.products).not.toContain(mockproduct1);
    });

    it('should increse product qty', () => {
        let mockproduct = {
            productId: "63c6215b04d12a4fe7ab50f0",
            name: "mock",
            price: 120000,
            qty: 1,
            subTotal: 99600
        }
        let addaction = addproduct({ product: mockproduct });
        let newState = cartReducer(initalstate, addaction);
        let incaction = increaseqty({ productId: "63c6215b04d12a4fe7ab50f0" })
        newState = cartReducer(newState, incaction);
        expect(newState.products.at(0)?.qty).toEqual(2);
        incaction = increaseqty({productId: ""});
        newState = cartReducer(newState, incaction);
        expect(newState.products.at(0)?.qty).toEqual(2);
    });

    it('should decrease product qty', () => {
        let mockproduct = {
            productId: "63c6215b04d12a4fe7ab50f0",
            name: "mock",
            price: 120000,
            qty: 4,
            subTotal: 99600
        }
        let addaction = addproduct({ product: mockproduct });
        let newState = cartReducer(initalstate, addaction);
        let deccaction = decreaseqty({ productId: "63c6215b04d12a4fe7ab50f0" })
        newState = cartReducer(newState, deccaction);
        expect(newState.products.at(0)?.qty).toEqual(3);
        deccaction = decreaseqty({productId: ""});
        newState = cartReducer(newState, deccaction);
        expect(newState.products.at(0)?.qty).toEqual(3);
    });

    it('should check login', () => {
        localStorage.setItem('loginuser', 'mock');
        let checkaction = checklogin();
        let newState = cartReducer(initalstate, checkaction);
        expect(newState.login).toEqual(true);
        localStorage.removeItem('loginuser');
        newState = cartReducer(newState, checkaction);
        expect(newState.login).toEqual(false);
    })
    it('should empty the cart', () => {
        let checkaction = emptycart();
        let newState = cartReducer(initalstate, checkaction);
        expect(newState.products).toEqual([]);
    })
    it('should check the cart price', () => {
        let mockproduct = {
            productId: "63c6215b04d12a4fe7ab50f0",
            name: "mock",
            price: 100,
            qty: 1,
            subTotal: 100
        }
        let addaction = addproduct({ product: mockproduct });
        let newState = cartReducer(initalstate, addaction);

        let checkaction = checkprice();
        newState = cartReducer(newState, checkaction);
        expect(newState.price).toEqual(100);
    })
  });