import { Fragment, useEffect, useState } from "react";
import { Brand } from "../../components/Brand";
import { ContenCarousel } from "../../components/ContenCarousel";
import { BlogSection } from "../../components/Blog";
import { Menu } from "../../components/Menu";
import { Product } from "../../types";
import { products as fakeProducts } from "../../data/product";
import { ProductItem } from "../../components/ProductItem";
import "./style.css";

export const HomePage = () => {
  const [products, setProduct] = useState<Product[]>([]);
  useEffect(() => {
    setProduct(fakeProducts.slice(0, 6));
  }, []);
  return (
    <Fragment>
      <section id="menu">
        <div className="container">
          <div className="menu-container">
            <div className="menu-banner">
              <img
                src="https://file.hstatic.net/1000075078/file/banner_app_6ffbf8a1c2f84d57a1fbb21516f6705c.jpeg"
                alt=""
              />
            </div>
            {products.map((item) => (
              <ProductItem product={item} />
            ))}
          </div>
        </div>
      </section>

      {/* <Brand />
      <ContenCarousel /> */}
      <BlogSection />
    </Fragment>
  );
};
