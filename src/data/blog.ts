import { Blog, BlogTopic } from "../types";
import { createUniqueId } from "../utils";

const coffeeHolicID = createUniqueId()
const teaHolicID = createUniqueId()
const blogID = createUniqueId()



export const blogTopics: BlogTopic[] = [
    {
        id: coffeeHolicID,
        title: "Coffeholic"
    },
    {
        id: teaHolicID,
        title: "Teaholic"
    },
    {
        id: blogID,
        title: "Blog"
    }

]

export const blogs: Blog[] = [
    {
        id: createUniqueId(),
        cover: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
        createdAt: new Date(),
        title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
        content: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        shortDescription: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        topic: coffeeHolicID
    },
    {
        id: createUniqueId(),
        cover: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
        createdAt: new Date(),
        title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
        content: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        shortDescription: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        topic: coffeeHolicID
    },
    {
        id: createUniqueId(),
        cover: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
        createdAt: new Date(),
        title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
        content: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        shortDescription: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        topic: coffeeHolicID
    },
    {
        id: createUniqueId(),
        cover: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
        createdAt: new Date(),
        title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
        content: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        shortDescription: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        topic: teaHolicID
    },
    {
        id: createUniqueId(),
        cover: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
        createdAt: new Date(),
        title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
        content: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        shortDescription: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        topic: teaHolicID
    },
    {
        id: createUniqueId(),
        cover: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
        createdAt: new Date(),
        title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
        content: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        shortDescription: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        topic: teaHolicID
    },
    {
        id: createUniqueId(),
        cover: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
        createdAt: new Date(),
        title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
        content: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        shortDescription: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        topic: blogID
    },
    {
        id: createUniqueId(),
        cover: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
        createdAt: new Date(),
        title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
        content: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        shortDescription: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        topic: blogID
    },
    {
        id: createUniqueId(),
        cover: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
        createdAt: new Date(),
        title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
        content: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        shortDescription: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này.",
        topic: blogID
    }
]