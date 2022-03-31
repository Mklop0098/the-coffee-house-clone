import { useState, useEffect } from "react";
import { BrandContents } from "../../types";
import { brands as fakeBrands } from "../../data";
import { ButtonReact } from "../Button";
import "./style.css";

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
              {/* <button
                style={{
                  backgroundColor: button.backgroundColor,
                  width: button.width,
                  height: button.height,
                  color: button.color,
                  fontSize: button.fontSize,
                  border: button.border,
                  borderRadius: button.borderRadius,
                }}
              >
                {topic.buttonTitle}
              </button> */}
              <ButtonReact type={1} name="Tìm hiểu thêm" />
            </div>
            <img className="content__img" src={topic.img} />
          </div>
        ))}
      </div>
    </div>
  );
};
