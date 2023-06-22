import { Product } from "./product"

interface cart {
    products: Product[],
    price: number
}

const localstg = JSON.parse(localStorage.getItem('cart') || '{"products":[],"price":0}');
export const initalstate: cart = {
    products: localstg.products,
    price: localstg.price
}