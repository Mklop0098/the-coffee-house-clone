import { Fragment } from "react"
import { Brand } from "../../components/Brand"
import { ContenCarousel } from "../../components/ContenCarousel"
import { Experience } from "../../components/Experience"
import { Menu } from "../../components/Menu"

export const HomePage = () => {
    return (
        <Fragment>
            <Menu />
            <Brand />
            <ContenCarousel />
            <Experience />
        </Fragment>
    )
}