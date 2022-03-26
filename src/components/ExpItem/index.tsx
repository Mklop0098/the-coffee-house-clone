import { useState, useEffect } from "react"
import "./style.css"

type MenuProps = {
    items: MenuItem[]
}
type PropsItem = {
    items: Item
}
export type Item = {
    href: string
    time: string
    title: string
    text: string
}
export type MenuItem = {
    title: string
    items: Item[]
}




export const ExpItem: React.FC<PropsItem> = (props) => {
    const {items} = props
    return (
        <div className="expItem">       
            <div className="background" style={{backgroundImage : `url(${items.href})`,}}>
            </div>
                <div className="content">
                    <div className="time">
                        <p>{items.time}</p>
                    </div>
                    <div className="title1">
                       <p >{items.title}</p>
                    </div>
                    <div className="text">
                       <p>{items.text}</p>
                    </div>
                </div>
        </div>
    )
}