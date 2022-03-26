

type ItemsMenu = {
    items: ItemMenu
}
export type ItemMenu = {
    src: string
    title: string
    price: string
    href: string    
}


export const MenuContentItem:React.FC<ItemsMenu> = (props) => {
    const {items} = props
    return (
        <div className="mn-item">
            <a href={items.href}><img src={items.src}alt="" /> </a>
            <a href={items.href}>{items.title}</a>
            <span>{items.price}</span>
        </div>
        
    )
}