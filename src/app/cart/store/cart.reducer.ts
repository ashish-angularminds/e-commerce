import { createReducer, on } from "@ngrx/store";
import { addproduct, decreaseqty, increaseqty, removeproduct } from "./cart.actions";
import { initalstate } from "./cart.state";

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
            })
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
            })
        }
    }),
)

export function cartReducer(state: any, action: any) {
    return _cartReducer(state, action);
}