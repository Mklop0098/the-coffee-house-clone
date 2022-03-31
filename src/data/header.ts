import { link } from "fs";
import { createUniqueId } from "../utils";


export type UpHeaderTopic = {
    img: string
    content: string

}
export type DownHeaderTopic = {
    id: string
    title: string
    link: string
}


const caphe = createUniqueId()
const tra = createUniqueId()
const menu = createUniqueId()
const chuyennha = createUniqueId()
const cuahang = createUniqueId()
const khaitruongnhamoi = createUniqueId()
const tuyendung = createUniqueId()

export const upHeaderTopics: UpHeaderTopic[] = [
    {   
        img: "https://file.hstatic.net/1000075078/file/vector_706a88566eab4f009bed6eea93cd890b.png",
        content: "146 Cửa hàng khắp cả nước",
      },
      {
        img: "https://file.hstatic.net/1000075078/file/group_8de276faa50c486b9d485826c506803b.png",
        content: "Đặt hàng: 1800.6936",
      },
      {
        img: "https://file.hstatic.net/1000075078/file/vector_c337310f409d440f890b370ff9cefe44.png",
        content: "Freeship từ 50.000vnd",
      },
]

export const downHeaderTopics: DownHeaderTopic[] = [
    {
        id: caphe,
        title: "Cà phê",
        link: "/collections/:id"
    },
    {
        id: tra,
        title: "Trà",
        link: "/tea/:id"
        
    },
    {
        id: menu,
        title: "Menu",
        link: "/collections/:id"
    },
    {
        id: chuyennha,
        title: "Chuyện nhà",
        link: "/collections/:id"
    },
    {
        id: cuahang,
        title: "Cửa hàng",
        link: "/collections/:id"
    },
    {
        id: khaitruongnhamoi,
        title: "Khai trương Nhà mới",
        link: "/collections/:id"
    },
    {
        id: tuyendung,
        title: "Tuyển dụng",
        link: "/collections/:id"
    }

]

