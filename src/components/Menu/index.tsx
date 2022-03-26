// import { useState, useEffect } from "react"
import "./style.css"
import { ItemMenu, MenuContentItem } from "../MenuItem"

const Banner = {
    href: "https://file.hstatic.net/1000075078/file/banner_app_6ffbf8a1c2f84d57a1fbb21516f6705c.jpeg"
}

const MenuContent = [
    {
        src: "https://product.hstatic.net/1000075078/product/ca-phe-sua-da_b00c53d18cd84144a164790323106a2f_large.jpg",
        title: "Cà Phê Sữa Đá",
        price: "20.300 đ",
        href: ""
    },
    {
        src: "https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg",
        title: "Bánh Mì VN Thịt Nguội",
        price: "29.000 đ",
        href: ""
    },
    {
        src: "https://product.hstatic.net/1000075078/product/bac-siu-da_9bf82220a1a54847aa7357de541e7552_large.jpg",
        title: "Bạc Sỉu Đá",
        price: "20.300 đ",
        href: ""
    },
    {
        src: "https://product.hstatic.net/1000075078/product/cha-bong-pho-mai_204282_400x400_8ff5f28305f547c287685bb01a8836fd_large.jpg",
        title: "Chà Bông Phô Mai",
        price: "32.000 đ",
        href: ""
    },
    {
        src: "https://product.hstatic.net/1000075078/product/ca-phe-den-da_6e25255ae31c4f3bbbb502f77e2c100d_large.jpg",
        title: "Cà Phê Đen Đá",
        price: "20.300 đ",
        href: ""
    },
    {
        src: "https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg",
        title: "Bánh Mì Que Pate",
        price: "12.000 đ",
        href: ""
    },
]

export const Menu:React.FC = () => {

    return (
        <div id="content">
            <div className="content-menu">
                <div className="first-item mn-item">
                    <a href=""><img src={Banner.href} alt="" /></a>
                </div>
                {MenuContent.map(item => (
                    <MenuContentItem 
                    items={item}/>
                ))}
            </div>
        </div>
        
    )
}