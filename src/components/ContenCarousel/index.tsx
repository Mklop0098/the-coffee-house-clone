import { useState, useEffect } from "react";
import "./style.css";
import { Carousel, CarouselItem } from "../Carousel";
import { Button } from "../Button";

const button = {
  title: "Tìm hiểu thêm",
  width: "55%",
  height: "40px",
  backgroundColor: "#EA8025",
  border: "none",
  borderRadius: "10px",
  color: "white",
  fontSize: "16px",
};

const items: CarouselItem[] = [
  {
    href: "https://file.hstatic.net/1000075078/file/img_2863_01d668ddff2e4dccb5f0b7e73c017d5f_master.jpg",
    id: "1",
  },
  {
    href: "https://file.hstatic.net/1000075078/file/img_2499_e46f21dec9b94536bcc8bb1a7cadda4a_master.jpg",
    id: "2",
  },
  {
    href: "https://file.hstatic.net/1000075078/file/img_2697_2fee8885875b4e6cab3c14b9cb15856f_master.jpg",
    id: "3",
  },
  {
    href: "https://file.hstatic.net/1000075078/file/img_2908__1__998e46cb5ed044769449c39f9f9290f8_master.jpg",
    id: "4",
  },
  {
    href: "https://file.hstatic.net/1000075078/file/img_2559_39c6f5d9d51043fda30c49a51aba6063_master.jpg",
    id: "5",
  },
  {
    href: "https://file.hstatic.net/1000075078/file/img_2592_abd501ac16bb44bbbf17fd5635c654d0_master.jpg",
    id: "6",
  },
  {
    href: "https://file.hstatic.net/1000075078/file/img_2484_08dd5618d97249e2bd30c2d603cfa17a_master.jpg",
    id: "7",
  },
  {
    href: "https://file.hstatic.net/1000075078/file/img_2555_bc6234d2477c4b58971ef25e13638448_master.jpg",
    id: "8",
  },
];
export const ContenCarousel: React.FC = () => {
  return (
    <div className="contentCarousel">
      <div className="container">
        <div className="content">
          <span>The Coffee House - The Park Home, Hà Nội</span>
          <p>
            Mừng Nhà mới khai trương, nhận ngay ưu đãi giảm 20% áp dụng tại cửa
            hàng{" "}
          </p>
          {/* <ButtonReact /> */}
        </div>
        <div className="carousel">
          <Carousel items={items} />
        </div>
      </div>
    </div>
  );
};
