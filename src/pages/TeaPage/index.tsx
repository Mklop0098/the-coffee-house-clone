import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductItem } from "../../components/ProductItem";
import { teaProducts } from "../../data/product";
import { Product } from "../../types";
import "./style.css";

// type ProductPageProps = {};

export const TeaPage = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const match = useParams();
  console.log(match);

  useEffect(() => {
    setProductList(teaProducts);
  }, []);

  return (
    <div className="container">
      <div className="product-topic">
        <h2>Trà Tại Nhà</h2>
      </div>
      <div className="product">
        <div className="product-container">
          {productList.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
