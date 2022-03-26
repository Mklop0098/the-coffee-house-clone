// import { useState, useEffect } from "react"
import "./style.css"
type ButtonInfo = {
    items : Inform
}

export type Inform = {
    title: string
    backgroundColor: string
    width: string
    height: string
    color: string
    fontSize: string
    borderRadius: string
    border: string
}




export const Button:React.FC<ButtonInfo> = (props) => {
    const {items} = props
    console.log(items)
    return (
        <div id="button">
            <button
                style={{
                    width: items.width,
                    height: items.height,
                    backgroundColor: items.backgroundColor,
                    color: items.color,
                    fontSize: items.fontSize,
                    borderRadius: items.borderRadius,
                    border: items.border

                }}
            >{items.title}</button>
        </div>
    )
}