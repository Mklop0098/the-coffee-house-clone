export type Product = {
    id: string
    thumbnails: string[]
    name: string
    price: number
    discountPrice?: number,
    discountPercent?: number, // 18
    information: string,
    story: {
        topic: string
        shortDesc: string
        content: string[]
    }

    size?: ProductSize[] // Medium , Big + 6000d

    /**
     * Array of toping id
     */
    toppings?: ProductToping[]
    productType?: PRODUCT_TYPE

}

export type ProductSize = {
    name: string,
    price: number
}

export enum PRODUCT_TYPE {
    "tra" = 1,
    "cafe" = 2
}

export type ProductToping = {
    id: string,
    name: string,
    price: number
}

export type Blog = {
    id: string
    title: string
    cover: string
    shortDescription: string
    content: any
    createdAt: Date
    topic: string
}

export type BlogTopic = {
    id: string
    title: string
}

export type DownHeaderTopic = {
    id: string
    title: string
    link: string
}

export type UpHeaderTopic = {
    img: string
    content: string

}

export type BrandContents = {
    title: string
    desc: string
    buttonTitle: string
    img: string
}

export type ResponseData<T> = {
    code: number,
    message?: string,
    data?: T
}

export type Button = {
    type: BUTTON_TYPE
    name: string
}

export enum BUTTON_TYPE {
    "CONTAINED-HOVER" = 1,
    "TEXT" = 2,
    "OUTLINE" = 3,
    "CONTAINED" = 4
}

