import "./style.css"

import {DownHeaderList} from "../DownHeaderList"
import { Link } from "react-router-dom"

type DownItems = {
    items: ItemDown
}

export type data = {
    data: string
}

export type Sub = {
    title: string
    content: data[]
}

export type ItemDown = {
    title: string
    href: string
    subTitle: Sub[]
}


export const DownHeaderItem:React.FC<DownItems> = (props) => {
    const {items} = props
    return (
    <div>
        <Link to={items.href}>{items.title}</Link>
    </div>
        
    )
}