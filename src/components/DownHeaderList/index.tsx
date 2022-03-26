import "./style.css"

type DownList = {
    items: List
}

export type Data = {
    data: string
}

export type List = {
    title: string
    content: Data[]
}


export const DownHeaderList:React.FC<DownList> = (props) => {
    const {items} = props
    console.log(items.content)
    return (
            <div className="container-sub">
                <div className="title-sub">
                    <p>{items.title}</p>
                </div>
                <div className="content-sub">

                </div>
            </div>
        
    )
}