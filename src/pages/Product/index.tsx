import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductItem } from "../../components/ProductItem";
import { products } from "../../data/product";
import { Product } from "../../types";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ButtonReact } from "../../components/Button";
import "./style.css";
import { getProductById } from "../../api/product";

// type ProductPageProps = {};

export const ProductPage = () => {
  const match = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product>();
  const [showFullStory, setShowFullStory] = useState(false);

  useEffect(() => {
    const response = getProductById(match.id);
    if (response.code === 404) {
      throw new Error(response.message);
    }
    setProduct(response.data);
  }, [match.id]);

  const handleShowStory = () => {
    setShowFullStory(!showFullStory);
  };

  console.log(product, products);

  return (
    <div className="container">
      <div className="container__item">
        <div className="carousel">
          <img src={product?.thumbnails[0]} alt="" />
        </div>
        <div className="item-deliver">
          <h4>{product?.name}</h4>
          <span>{product?.price}</span>
          <div className="item-button">
            <ButtonReact type={1} name="Đặt giao tận nơi" />
            {/* <button
              style={{
                backgroundColor: "#EA8025",
                width: "100%",
                height: "45px",
                color: "white",
                fontSize: "18px",
                borderRadius: "none",
                border: "none",
              }}
            >
              
            </button> */}
            <button
              style={{
                backgroundColor: "#fff7e6",
                width: "48%",
                height: "45px",
                color: "#EA8025",
                fontSize: "18px",
                borderRadius: "none",
                border: "none",
              }}
            >
              Mua tại cửa hàng
            </button>
            <button
              style={{
                backgroundColor: "#fff7e6",
                width: "48%",
                height: "45px",
                color: "#EA8025",
                fontSize: "18px",
                borderRadius: "none",
                border: "none",
              }}
            >
              Mua mang đi
            </button>
          </div>
        </div>
      </div>
      <div className="inform-story">
        <div className="information">
          <h4>Thông tin</h4>
          <p>{product?.information}</p>
        </div>
        <div className="story">
          <div className={showFullStory ? "story-full" : "story-short"}>
            <h4>Câu chuyện</h4>
            {/* <ExpandableParagraph paragraph={""} height={220} /> */}
            <span>{product?.story.topic}</span>
            <span>{product?.story.shortDesc}</span>
            {product?.story.content.map((content) => (
              <span>{content}</span>
            ))}
          </div>
          <span
            style={{
              fontSize: "16px",
              color: "rgb(234 128 37)",
            }}
            onClick={handleShowStory}
          >
            {showFullStory ? "Ẩn bớt" : "Xem thêm"}
          </span>
        </div>
      </div>
      <div className="concem-same-item">
        <h4>Sản phẩm liên quan</h4>
        <div className="same-item">
          {products.slice(0, 6).map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
