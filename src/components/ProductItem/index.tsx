import { Product } from "../../types"
import "./style.css"

type ProductItemProps = {
    product: Product
}


export const ProductItem:React.FC<ProductItemProps> = (props) => {
    const {product} = props
    return (
        <div className="product-item">
            <a href={`/product/${product.id}`}><img className="product-item__img" src={product.img}alt="" /> </a>
            <a href={`/product/${product.id}`}><h3 className="product-item__name">{product.name}</h3></a>
            <span className="product-item__price">{product.price}</span>
            {
                product.discountPrice && <span className="product-item__discount">{product.discountPrice}</span>
            }
        </div>
        
    )
}