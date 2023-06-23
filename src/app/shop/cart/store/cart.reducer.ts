import { createReducer, on } from "@ngrx/store";
import { addproduct, checklogin, checkprice, decreaseqty, emptycart, increaseqty, removeproduct } from "./cart.actions";
import { initalstate } from "./cart.state";
import { state } from "@angular/animations";

const _cartReducer = createReducer(initalstate,
    on(addproduct, (state, action) => {
        return {
            ...state,
            price: state.price + action.product.price,
            products: [...state.products, action.product]
        }
    }),
    on(removeproduct, (state, action) => {
        return {
            ...state,
            products: state.products.filter((data) => {
                if (data.productId != action.productId)
                    return true;
                else
                    return false;
            }),
            price: state.products.reduce((a, data) => {
                if (data.productId != action.productId)
                    return a + data.price
                else
                    return a + 0;
            }, 0)
        }
    }),
    on(increaseqty, (state, action) => {
        return {
            ...state,
            products: state.products.map((data) => {
                if (data.productId === action.productId) {
                    return {
                        ...data,
                        qty: data.qty + 1,
                        subTotal: data.subTotal + data.price
                    }
                }
                else
                    return data;
            }),
        }
    }),
    on(decreaseqty, (state, action) => {
        return {
            ...state,
            products: state.products.map((data) => {
                if (data.productId === action.productId) {
                    return {
                        ...data,
                        qty: data.qty - 1,
                        subTotal: data.subTotal - data.price
                    }
                }
                else
                    return data;
            }),
        }
    }),
    on(checklogin, (state) => {
        return {
            ...state,
            login: localStorage.getItem('loginuser') ? true : false
        }
    }),
    on(emptycart, (state) => {
        return {
            ...state,
            products: [],
            price: 0
        }
    }),
    on(checkprice, (state) => {
        return {
            ...state,
            price: state.products.reduce((a, data) => {
                console.log(data.subTotal)
                return a + data.subTotal
            }, 0)
        }
    })
)

export function cartReducer(state: any, action: any) {
    return _cartReducer(state, action);
}