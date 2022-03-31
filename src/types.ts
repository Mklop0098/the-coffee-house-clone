

export type Product = {
    id: string,
    thumbnails: string[],
    name: string,
    price: number,
    discountPrice?: number,
    discountPercent?: number, // 18
    information: string[],
    story: string[],

    size?: ProductSize[] // Medium , Big + 6000d

    /**
     * Array of toping id
     */
    toppings?: ProductToping[]
    productType?: string

}
export type ProductToping = {
    id: string,
    name: string,
    price: number
}


export type ProductSize = {
    name: string,
    extraPrice?: number
}


export type ResponseData<T> = {
    code: number,
    message?: string,
    data?: T
}



export type Blog = {
    id: string;
    title: string;
    cover: string;
    shortDescription: string;
    content: any;
    createdAt: Date;
    topic: string;
  };
  export type BlogTopic = {
    id: string;
    title: string;
  };