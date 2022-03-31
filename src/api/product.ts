import { products } from "../data"
import { Product, ResponseData } from "../types";



// 404: not found, 200: success
export const getProductById = (id?: string): ResponseData<Product> => {
    const product = products.find(product => product.id === id);
    if (!product) { 
        return {
            code: 401,
            message: "Product not found",
        }
    }
    else return {
        code: 200,
        data: product
    }
}