import { Link } from "react-router-dom";
import { Product } from "../../types";
import "./style.css";

type ProductItemProps = {
  product: Product;
};

export const ProductItem: React.FC<ProductItemProps> = (props) => {
  const { product } = props;
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img className="product-item__img" src={product.thumbnails[0]} alt="" />{" "}
      </Link>
      <a href={`/product/${product.id}`}>
        <h3 className="product-item__name">{product.name}</h3>
      </a>
      <div className="product-price">
        <span className="product-item__price">
          {product.price.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </span>
        {/* {product.discountPrice && (
          <span className="product-item__discount">
            {product.discountPrice}
          </span>
        )} */}
      </div>
    </div>
  );
};
