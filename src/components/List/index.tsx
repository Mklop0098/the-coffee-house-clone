// import { useState, useEffect } from "react"
import "./style.css"


type ListDown = {
    list: Content[]
}

export type Content = {
    data: string
}

export const List:React.FC<ListDown> = (props) => {

    const {list} = props

    return (
        <div id="content-list">
            {list.map(item => (
                <div>{item.data}</div>
            ))}
        </div>
        
    )
}