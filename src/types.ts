export type Product = {
    id: string
    img: string
    name: string
    price: number
    discountPrice?: number
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