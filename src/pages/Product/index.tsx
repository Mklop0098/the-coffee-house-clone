import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductItem } from "../../components/ProductItem";
import { products } from "../../data/product";
import { Product, ProductSize, ProductToping } from "../../types";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "../../components/Button";
import "./style.css";
import { ExpandableParagraph } from "../../components/ExpandableParagraph";
import { getProductById } from "../../api/product";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { numberFormat, formatCurrency } from "../../utils";
import Slider, { Settings } from "react-slick";

export const ProductPage = () => {
  const match = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product>();
  const [selectedSize, setSelectedSize] = useState<ProductSize>();
  const [selectedTopping, setSelectedTopping] = useState<ProductToping>();

  useEffect(() => {
    const response = getProductById(match.id);
    if (response.code === 404) {
      throw new Error(response.message);
    }
    setProduct(response.data);
  }, [match.id]);

  const handleSelectSize = (size: ProductSize) => {
    if (selectedSize) {
      if (selectedSize.name === size.name) {
        setSelectedSize(undefined);
      } else {
        setSelectedSize(size);
      }
    } else {
      setSelectedSize(size);
    }
  };

  const handleSelectTopping = (topping: ProductToping) => {
    if (!selectedTopping) {
      setSelectedTopping(topping);
    } else if (selectedTopping.id === topping.id) {
      setSelectedTopping(undefined);
    } else {
      setSelectedTopping(topping);
    }
  };
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="container">
      <Breadcrumbs productType={product?.productType} name={product?.name} />
      <div className="container__item">
        <div className="carousel">
          <Slider {...settings}>
            {product?.thumbnails.map((thumbnail) => (
              <img src={thumbnail} alt="" />
            ))}
          </Slider>
        </div>
        <div className="item-deliver">
          <h4>{product?.name}</h4>
          <div className="product-price">
            <span>
              {formatCurrency(
                (product?.discountPrice || product?.price || 0) +
                  (selectedSize?.extraPrice || 0) +
                  (selectedTopping?.price || 0)
              )}
            </span>
            <del>{formatCurrency(product?.discountPrice)}</del>
            <p>
              {product?.discountPercent &&
                product.discountPercent.toLocaleString("en-US", {
                  style: "percent",
                  minimumFractionDigits: 0,
                })}
            </p>
          </div>

          {product?.size ? (
            <div className="item-size">
              <p>Kích thước</p>
              <div className="size-button">
                {product?.size?.map((size) => (
                  <div>
                    <Button
                      onClick={() => handleSelectSize(size)}
                      active={selectedSize?.name === size.name}
                      type="outline"
                      text={`${size.name} ${
                        size.extraPrice
                          ? "+ " + formatCurrency(size.extraPrice)
                          : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          {product?.toppings ? (
            <div className="item-topping">
              <p>Topping</p>
              <div className="topping-button">
                {product?.toppings?.map((topping) => (
                  <div>
                    <Button
                      onClick={() => handleSelectTopping(topping)}
                      type="outline"
                      text={
                        topping.name + " + " + formatCurrency(topping.price)
                      }
                      active={selectedTopping?.id === topping.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}

          <Button
            type="contained"
            borderRadius={10}
            color="primary"
            bold
            text="Đặt giao tận nơi"
          />
          <div className="flex w-100">
            <Button
              type="text"
              borderRadius={10}
              color="secondary"
              text="Mua tại cửa hàng"
            />
            <Button
              type="text"
              borderRadius={10}
              color="secondary"
              text="Mua mang đi"
            />
          </div>
        </div>
      </div>
      <div className="paragraph-container">
        <div className="information">
          <h4>Thông Tin</h4>
          <ExpandableParagraph paragraphs={product?.information} />
        </div>
        <div className="story">
          <h4>Câu Chuyện</h4>
          <ExpandableParagraph paragraphs={product?.story} />
        </div>
      </div>
      {/*  */}
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
