import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductItem } from "../../components/ProductItem";
import { products } from "../../data/product";
import { Product } from "../../types";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./style.css";

// type ProductPageProps = {};

export const ProductsPage = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  // const match = useParams();
  // console.log(match);

  useEffect(() => {
    setProductList(products);
  }, []);

  return (
    <div className="container">
      <div className="product-topic">
        <h2>Cà Phê Tại Nhà</h2>
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
