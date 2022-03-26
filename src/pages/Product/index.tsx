import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductItem } from "../../components/ProductItem";
import {products} from "../../data/product"
import { Product } from "../../types";
import "./style.css"


type ProductPageProps = {

} 

export const ProductPage = () => {
    const [productList, setProductList] = useState<Product[]>([])
    const match = useParams()
    console.log(match)

    useEffect( () => {
        setProductList(products)   
    }, [])

    return (
        <div className="product">
            <div className="product-container">
                {
                    productList.map(product => (
                        <ProductItem 
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    )
}