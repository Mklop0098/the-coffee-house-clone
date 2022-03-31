import { useState, useEffect } from "react";
import { brands as fakeBrands } from "../../data";
import { Button } from "../Button";
import "./style.css";

export type BrandContents = {
  title: string;
  desc: string;
  buttonTitle: string;
  img: string;
};
export const Brand: React.FC = () => {
  const [brands, setBrands] = useState<BrandContents[]>([]);

  useEffect(() => {
    setBrands(fakeBrands);
  }, []);

  return (
    <div id="brand">
      <div className="container">
        {brands.map((topic) => (
          <div className="brand__content">
            <div className="content">
              <h2>{topic.title}</h2>
              <p>{topic.desc}</p>
              <Button
                type="contained-hover"
                borderRadius={10}
                color="primary"
                text="Tìm hiểu thêm"
              />
            </div>
            <img className="content__img" src={topic.img} />
          </div>
        ))}
      </div>
    </div>
  );
};
