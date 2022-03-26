import { useState, useEffect } from "react"
import "./style.css"
type CarouselProps = {
    items: CarouselItem[]
}
export type CarouselItem = {
    href: string
    id: string
}

export const Carousel: React.FC<CarouselProps> = (props) => {
    const {items} = props
    const [activeItem, setActiveItem] = useState(0)
    const [appear, setApper] = useState(false)
    const handleBack = () => {
        if(activeItem === 0){
            setActiveItem(items.length - 1)
        }
        else {
            setActiveItem(activeItem - 1)
        }
        setApper(true)
        setTimeout(() => setApper(false), 400);
    }

    const handleNext = () => {
        setActiveItem(activeItem + 1)
        if(activeItem === items.length - 1) {
            setActiveItem(0)
        }
        else {
            setActiveItem(activeItem + 1)
        }
        setApper(true)
        setTimeout(() => setApper(false), 400);
    }

    useEffect(() => {
        if(activeItem >= 0 || activeItem < items.length - 1) {
             setTimeout(() => {
                    if (activeItem < items.length - 1){
                        setActiveItem(activeItem+1)
                        setApper(true)
                        setTimeout(() => setApper(false), 400);
                    }
                    else{
                        setApper(true)
                        setTimeout(() => setApper(false), 400);
                        setActiveItem(0)
                    }
                }
             ,5000);
            }
     }, [activeItem])

    

    return (
        <div className="carousel">
            <div className="carousel-inner" >
                {items.map((item) => (
                    <img style={{transform : `translateX(${-window.innerWidth * activeItem}px)`}} src={item.href} key = {item.id} id = {appear ? "appear" : ''}  className={items[activeItem].id === item.id ? "carousel-item--active" : ''} 
                    />
                    
                ))}
            <button onClick={handleBack} className="buttonPrev">Prev</button>
            <button onClick={handleNext} className="buttonNext">Next</button> 
            </div>
            

        </div>
    )
}