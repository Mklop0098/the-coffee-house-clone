// import { useState, useEffect } from "react"
import "./style.css"
import { UpHeaderItem, Item } from "../UpHeaderItem"
import { DownHeaderItem, ItemDown } from "../DownHeaderItem"
import { List } from "../List"
import { Link } from "react-router-dom"

const upItems:Item[] = [
    {
        icon:"https://file.hstatic.net/1000075078/file/vector_706a88566eab4f009bed6eea93cd890b.png",
        content:"146 Cửa hàng khắp cả nước",
    },
    {
        icon:"https://file.hstatic.net/1000075078/file/group_8de276faa50c486b9d485826c506803b.png",
        content:"Đặt hàng: 1800.6936",
    },
    {
        icon:"https://file.hstatic.net/1000075078/file/vector_c337310f409d440f890b370ff9cefe44.png",
        content:"Freeship từ 50.000vnd",
    }
]

const downItem = {
    title: "The Coffe House"
}

const downItemList:ItemDown[] = [
    {
        title: "Cà phê",
        href: "/collections/coffe",
        subTitle: []
        

    },
    {
        title: "Trà",
        href: "",
        subTitle: []
        
    },
    {
        title: "Menu",
        href: "",
        subTitle: [
            {
                title: "Tất Cả",
                content: []
            },
            {
                title: "Cà Phê",
                content: [
                    {data: "Cà Phê Việt Nam"},
                    {data: "Cà Phê Máy"},
                    {data: "Cold Brew " } 
                ]
            },
            {
                title: "Trà",
                content: [
                    {data: "Trà trái cây"},
                    {data: "Trà sữa Macchiato"}
                ]
            },
            {
                title: "Món khác",
                content: [
                    {data: "Đá xay"},
                    {data: "Matcha - Sô cô la"}
                ]
            },
            {
                title: "Bánh & Snack",
                content: [
                    {data: "Bánh mặn"},
                    {data: "Bánh ngọt"},
                    {data:"Snack"}
                ]
            },
            {
                title: "Tại Nhà",
                content: [
                    {data: "Cà phê tại nhà"},
                    {data: "Trà tại nhà"},
                    {data: "Bộ sưu tập quà tặng"}
                ]
            },
        ]
    },
    {
        title: "Chuyện nhà",
        href: "",
        subTitle: []
    },
    {
        title: "Cửa hàng",
        href: "",
        subTitle: []
    },
    {
        title: "Khai trương Nhà mới",
        href: "",
        subTitle: []
    },
        {
        title: "Tuyển dụng",
        href: "",
        subTitle: []
    }
]


export const Header:React.FC = () => {
    
    return (
        <div id="header">
            <div id="up-header">
                {upItems.map(item => (
                    <UpHeaderItem
                        key={item.content} 
                        items={item}
                    />
                ))}


            </div>

            <div id="down-header">
                <div id="container">
                    <div className="title"><Link to={"/"}>{downItem.title}</Link></div>
                    <div className="nav-down">
                        
                        {downItemList.map(item => (
                            <DownHeaderItem 
                                key={item.title}
                                items={item}
                            />
                        ))}
                    </div>
                    <div className="sub">
                    {downItemList.map(item => (
                        item.subTitle.map(sub => (
                            <div className="sub-container">
                                <div className="sub-title">{sub.title}</div>
                                <List 
                                    list={sub.content}
                                />
                            </div>
                        ))
                    ))}
                </div>
                </div>

            </div>
        </div>
        
    )
}