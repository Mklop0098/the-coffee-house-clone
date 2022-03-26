

type UpItems = {
    items: Item
}
export type Item = {
    icon: string
    content: string
}


export const UpHeaderItem:React.FC<UpItems> = (props) => {
    const {items} = props
    return (
    <div className="list_nav"><a href="">
        <img src={items.icon} className="icon"/>
        {items.content}</a>
    </div>
        
    )
}