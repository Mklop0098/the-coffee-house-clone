import { Product, ProductToping } from "../types";
import { createUniqueId } from "../utils";

export const products: Product[] = [
    {
        id: createUniqueId(),
        thumbnails: [
            "https://product.hstatic.net/1000075078/product/ori-1-1kg_66e116368a5b40e8a2afdf7f5909a94b_large.jpeg"
        ],
        name: "Cà Phê Rang Xay Original 1 Túi 1KG",
        price: 230_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/ca-phe-rang-xay-original-1-250gr_f7dd7b4553a54cdaa6c7a4969b5bc10d_large.jpg"],
        name: "Cà Phê Rang Xay Original 1 250gr",
        price: 59_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/ca-phe-dam-vi-viet_tui_new_d26f39e810fa4ade868c338f1423b307_large.jpeg"],
        name: "Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G",
        price: 98_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/cpsd-3in1_971575_400x400_08af198ffd3b4107a1843a2e44e3e8be_large.jpg"],
        name: "Cà Phê Sữa Đá Hòa Tan Hộp 10 gói",
        price: 44_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-dam-vi_c254dfedec5a46ddab87411dc708272c_large.jpg"],
        name: "Cà Phê Sữa Đá Hòa Tan Đậm Vị Hộp 18 gói x 16gr",
        price: 48_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg"],
        name: "Bánh Mì Que Pate",
        price: 12_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails:["https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg"],
        name: "Bánh Mì Que Pate Cay",
        price: 12_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg"],
        name: "Bánh Mì VN Thịt Nguội",
        price: 29_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-dam-vi_c254dfedec5a46ddab87411dc708272c_large.jpg"],
        name: "Chà Bông Phô Mai",
        price: 32_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg"],
        name: "Croissant Trứng Muối",
        price: 35_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    
]

export const teaProducts:Product[] = [
    {
        id: createUniqueId(),
        thumbnails: [
            "https://product.hstatic.net/1000075078/product/ori-1-1kg_66e116368a5b40e8a2afdf7f5909a94b_large.jpeg"
        ],
        name: "Cà Phê Rang Xay Original 1 Túi 1KG",
        price: 230_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/ca-phe-rang-xay-original-1-250gr_f7dd7b4553a54cdaa6c7a4969b5bc10d_large.jpg"],
        name: "Cà Phê Rang Xay Original 1 250gr",
        price: 59_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/ca-phe-dam-vi-viet_tui_new_d26f39e810fa4ade868c338f1423b307_large.jpeg"],
        name: "Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G",
        price: 98_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/cpsd-3in1_971575_400x400_08af198ffd3b4107a1843a2e44e3e8be_large.jpg"],
        name: "Cà Phê Sữa Đá Hòa Tan Hộp 10 gói",
        price: 44_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-dam-vi_c254dfedec5a46ddab87411dc708272c_large.jpg"],
        name: "Cà Phê Sữa Đá Hòa Tan Đậm Vị Hộp 18 gói x 16gr",
        price: 48_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg"],
        name: "Bánh Mì Que Pate",
        price: 12_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails:["https://product.hstatic.net/1000075078/product/banhmique_056830_400x400_8b3112e96ce949be82b70c4b4ab994c2_large.jpg"],
        name: "Bánh Mì Que Pate Cay",
        price: 12_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/banh-mi-vn-thit-nguoi_5e777a62ef2841bd9a5baf85c6970166_large.jpg"],
        name: "Bánh Mì VN Thịt Nguội",
        price: 29_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/ca-phe-sua-da-hoa-tan-dam-vi_c254dfedec5a46ddab87411dc708272c_large.jpg"],
        name: "Chà Bông Phô Mai",
        price: 32_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    {
        id: createUniqueId(),
        thumbnails: ["https://product.hstatic.net/1000075078/product/croissant-trung-muoi_880850_400x400_0d8d5e787de8423cb0e60455651a17ee_large.jpg"],
        name: "Croissant Trứng Muối",
        price: 35_000,
        information: "Cà phê Original 1 của The Coffee House với 100% thành phần cà phê Robusta Đăk Lăk, vùng trồng cà phê ngon nhất Việt Nam. Bằng cách áp dụng kỹ thuật rang xay hiện đại, Cà phê Original 1 mang đến trải nghiệm tuyệt vời khi uống cà phê tại nhà với hương vị đậm đà truyền thống hợp khẩu vị của giới trẻ sành cà phê.",
        story: {
            topic: "Cà phê rang xay Original 1 – Gu đậm truyền thống",
            shortDesc: "Mỗi hạt cà phê ra đời mang trong mình chất nguyên bản, tạo nên khác biệt đầy thú vị. ",
            content: [
                "Trưởng thành từ vùng đất bazan nắng gắt, mưa nhiều, đâm chồi từ đôi bàn tay cần mẫn của người nông dân yêu nghề và rồi cũng từ đôi bàn tay ấy những hạt cà phê đỏ mọng chất lượng tốt nhất được chắt chiu thu hoạch, rang xay tỉ mỉ trước khi về “Nhà”, để gửi đến bạn hương vị đậm đà, tôn vinh chất nguyên bản vốn có của hạt cà phê núi rừng Đắk Lắk.",           
                "The Coffee House đã chọn ra những hạt cà phê tốt nhất, kết hợp công nghệ rang xay hiện đại để mang đến bạn gói Cà Phê Original 1 The Coffee House với 100%  Robusta Đăk Lăk giữ trọn vị đậm đà truyền thống thỏa mãn vị giác của tín đồ cà phê Việt.",
                "Bạn đã sẵn sàng để thưởng thức ly cà phê mới từ The Coffee House chưa? Cùng thử và cho chúng mình biết cảm nhận nhé!"
            
            ]
        }
    },
    
]

// export const toppings: ProductToping[] = [
//     {
//         name: "Đào ngâm",
//         price: 10_000
//     }
// ]