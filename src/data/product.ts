import { Product } from "../types";
import { createUniqueId } from "../utils";

export const products:Product[] = [
    {
        id: createUniqueId(),
        img: "https://product.hstatic.net/1000075078/product/ori-1-1kg_66e116368a5b40e8a2afdf7f5909a94b_large.jpeg",
        name: "Cà Phê Rang Xay Original 1 Túi 1KG",
        price: 230_000
    },
    {
        id: createUniqueId(),
        img: "https://product.hstatic.net/1000075078/product/ca-phe-rang-xay-original-1-250gr_f7dd7b4553a54cdaa6c7a4969b5bc10d_large.jpg",
        name: "Cà Phê Rang Xay Original 1 250gr",
        price: 59_000
    },
    {
        id: createUniqueId(),
        img: "https://product.hstatic.net/1000075078/product/ca-phe-dam-vi-viet_tui_new_d26f39e810fa4ade868c338f1423b307_large.jpeg",
        name: "Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G",
        price: 98_000
    },
    {
        id: createUniqueId(),
        img: "https://product.hstatic.net/1000075078/product/cpsd-3in1_971575_400x400_08af198ffd3b4107a1843a2e44e3e8be_large.jpg",
        name: "Cà Phê Sữa Đá Hòa Tan Hộp 10 gói",
        price: 44_000
    },
    {
        id: createUniqueId(),
        img: "https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-dam-vi_c254dfedec5a46ddab87411dc708272c_large.jpg",
        name: "Cà Phê Sữa Đá Hòa Tan Đậm Vị Hộp 18 gói x 16gr",
        price: 48_000
    },
    {
        id: createUniqueId(),
        img: "https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg",
        name: "Bánh Mì Que Pate",
        price: 12_000
    },
    {
        id: createUniqueId(),
        img: "https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg",
        name: "Bánh Mì Que Pate Cay",
        price: 12_000
    },
    {
        id: createUniqueId(),
        img: "https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg",
        name: "Bánh Mì VN Thịt Nguội",
        price: 29_000
    },
    {
        id: createUniqueId(),
        img: "https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-dam-vi_c254dfedec5a46ddab87411dc708272c_large.jpg",
        name: "Chà Bông Phô Mai",
        price: 32_000
    },
    {
        id: createUniqueId(),
        img: "https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg",
        name: "Croissant Trứng Muối",
        price: 35_000
    },
    
]