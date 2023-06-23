import { Product } from "./product"

interface cart {
    products: Product[],
    price: number,
    login: boolean
}

const localstg = JSON.parse(localStorage.getItem('cart') || '{"products":[],"price":0}');
export const initalstate: cart = {
    products: localstg.products,
    price: localstg.price,
    login: localStorage.getItem('loginuser') ? true : false
}