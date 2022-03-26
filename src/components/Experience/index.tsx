import { ExpItem, MenuItem, Item} from "../ExpItem"
import "./style.css"

// const items1: MenuItem = 
//     {
//       href: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
//       time: "11/03/2022",
//       title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
//       text: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này."
//     }
// const items2: MenuItem = 
//     {
//       href: "https://file.hstatic.net/1000075078/article/thecoffeehouse_caphe_7_db8def55acbf426ea725921529f6f01e_grande.jpg",
//       time: "07/03/2022",
//       title: "BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ NGON, ĐẬM ĐÀ HƯƠNG VỊ",
//       text: "Nhiệt độ nước là một yếu tố quan trọng để có thể tạo nên những tách cà phê thơm ngon. Bạn đã biết nhiệt độ nước lý tưởng để pha cà phê đúng chuẩn? "
//     }
// const items3: MenuItem = 
//     {
//       href: "https://file.hstatic.net/1000075078/article/thecoffeehouse_caphe_2_aacf152c62064c40ab804a66ffc706d1_grande.jpg",
//       time: "04/03/2022",
//       title: "CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ",
//       text: "Có nhiều cách để pha một ly cà phê ngon, nhưng đối với nhiều người Việt giây phút đợi chờ những giọt cà phê rơi từ chiếc phin đã trở thành nét văn hóa ăn sâu trong tiềm thức. Để tạo nên một ly cà phê phin chuẩn vị, không chỉ cần sự tinh tế trong cách chọn loại cà phê mà còn cả sự tỉ mỉ trong từng bước pha."
//     }
// const items4: MenuItem = 
//     {
//       href: "https://file.hstatic.net/1000075078/article/thecoffeehouse_nuoc_pha_tra_07_4aff69297bfa4bbab42f18b27c2c11f0_grande.jpg",
//       time: "18/03/2022",
//       title: "CHỌN NHIỆT ĐỘ NƯỚC ĐỂ PHA TRÀ ĐÚNG CHUẨN CHUYÊN GIA",
//       text: "Tùy thuộc vào từng loại trà, cần sử dụng nước sôi với nhiệt độ tương thích để khi pha chế có thể khơi dậy đầy đủ hương vị thơm ngon của trà. "
//     }
// const items5: MenuItem = 
//     {
//       href: "https://file.hstatic.net/1000075078/article/thecoffeehouse_vi_sao_trang_tra_3_bd9d8a35291c4010a71d1609d16e13b8_grande.jpg",
//       time: "16/03/2022",
//       title: "VÌ SAO PHẢI TRÁNG TRÀ TRƯỚC KHI PHA",
//       text: "Từ ngàn xưa, tráng trà được xem là bước đầu tiên trong quy trình pha trà. Tráng trà không chỉ giúp loại bỏ các tạp chất trên bề mặt của lá trà, kích thích mùi thơm và hương vị trà còn có nhiều tác dụng khác. "
//     }
// const items6: MenuItem = 
//     {
//       href: "https://file.hstatic.net/1000075078/article/thecoffeehouse_amtusa_07_e9d40a62b6524ed7b5c3232c5031a493_grande.jpg",
//       time: "09/03/2022",
//       title: "CÁCH KHAI ẤM TỬ SA ĐỂ GỢI VỊ NGON CỦA TRÀ",
//       text: "Đối với giới trà đạo đã quá quen thuộc với ấm tử sa vì nó nổi tiếng là loại ấm pha trà ngon bậc nhất. Pha trà bằng ấm tử sa thì hương vị của trà được hấp thụ một cách trọn vẹn và nếu như đã thưởng thức một lần thì thật khó quên. Thế nhưng, để đạt được điều tuyệt vời đó, việc đầu tiên và rất quan trọng đó là phải biết khai ấm tử sa đúng cách. "
//     }
// const items7: MenuItem = 
//     {
//       href: "https://file.hstatic.net/1000075078/article/123232891_2820303564910318_4578047210373311456_n_699bea2973ec4087886ab888d5434de4_grande.jpg",
//       time: "14/02/2022",
//       title: "LỄ TÌNH NHÂN, CÙNG CRUSH ĐI ĐÂU?",
//       text: "Đối với giới trà đạo đã quá quen thuộc với ấm tử sa vì nó nổi tiếng là loại ấm pha trà ngon bậc nhất. Pha trà bằng ấm tử sa thì hương vị của trà được hấp thụ một cách trọn vẹn và nếu như đã thưởng thức một lần thì thật khó quên. Thế nhưng, để đạt được điều tuyệt vời đó, việc đầu tiên và rất quan trọng đó là phải biết khai ấm tử sa đúng cách. "
//     }
// const items8: MenuItem = 
//     {
//       href: "https://file.hstatic.net/1000075078/article/hn-le-thanh-nghi2_d161f1f7755249cba30f2ecc7a591e47_master_1bbacee733084b93a400eaa54762bf12_grande.jpg",
//       time: "11/02/2022",
//       title: "THE COFFEE HOUSE - QUÁN CÀ PHÊ LÝ TƯỞNG ĐỂ HỘI HỌP BẠN BÈ MÙA TẾT NÀY",
//       text: "Một chút thời gian còn lại của những ngày cuối năm, bạn muốn dành cho những người quan trọng mà mình yêu quý, cùng họ chuyện trò và sẻ chia. Hay vào những ngày đầu năm, bạn muốn gặp họ đầu tiên, để chúc cho những người bạn thương mến ngập tràn điều tốt đẹp nhất. Thế nhưng, bạn chưa tìm được một điểm hẹn lý tưởng, tiện cho cả bạn và tiện cho cả đối phương. Là nơi bạn có thể nói tất cả mọi thứ, là nơi bạn có thể thả mình, không phải lo nghĩ, là nơi để bạn thực sự tự do để thư giãn... Nếu vậy, mời bạn ghé Nhà nhé!"
//     }
// const items9: MenuItem = 
//     {
//       href: "https://file.hstatic.net/1000075078/article/tch206857_stacking_d4325b7f7a5945d7b2abee4eb7ad51d5_grande.jpg",
//       time: "24/01/2022",
//       title: "CHAI FRESH LUÔN BÊN BẠN TRONG MỌI KHOẢNH KHẮC",
//       text: "Dù bất kể nơi đâu, bất kể thời điểm nào, với nhiều ưu điểm nổi bật như: hương vị thơm ngon, đậm đà; thiết kế đơn giản và chắc chắn; dung tích lớn thật sảng khoái… thì những thức uống từ trà và cà phê được thiết kế dưới dạng chai Fresh tiện lợi của The Coffee House sẽ luôn tạo cho bạn sự hứng thú. Đồng hành cùng bạn trên những chặng đường và chinh phục những mục tiêu."
//     }

// const items = [

// ]

const chuyenNha: MenuItem[] = [
    {
        title: "CoffeHolic",
        items: [
            {
                href: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
                time: "11/03/2022",
                title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
                text: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này."
            },
            {
                href: "https://file.hstatic.net/1000075078/article/thecoffeehouse_caphe_7_db8def55acbf426ea725921529f6f01e_grande.jpg",
                time: "07/03/2022",
                title: "BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ NGON, ĐẬM ĐÀ HƯƠNG VỊ",
                text: "Nhiệt độ nước là một yếu tố quan trọng để có thể tạo nên những tách cà phê thơm ngon. Bạn đã biết nhiệt độ nước lý tưởng để pha cà phê đúng chuẩn? "
            },
            {
                href: "https://file.hstatic.net/1000075078/article/thecoffeehouse_caphe_2_aacf152c62064c40ab804a66ffc706d1_grande.jpg",
                time: "04/03/2022",
                title: "CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ",
                text: "Có nhiều cách để pha một ly cà phê ngon, nhưng đối với nhiều người Việt giây phút đợi chờ những giọt cà phê rơi từ chiếc phin đã trở thành nét văn hóa ăn sâu trong tiềm thức. Để tạo nên một ly cà phê phin chuẩn vị, không chỉ cần sự tinh tế trong cách chọn loại cà phê mà còn cả sự tỉ mỉ trong từng bước pha."
            }
        ]
    },
    {
        title: "CoffeHolic",
        items: [
            {
                href: "https://file.hstatic.net/1000075078/article/thecoffeehouse_nuoc_pha_tra_07_4aff69297bfa4bbab42f18b27c2c11f0_grande.jpg",
                time: "18/03/2022",
                title: "CHỌN NHIỆT ĐỘ NƯỚC ĐỂ PHA TRÀ ĐÚNG CHUẨN CHUYÊN GIA",
                text: "Tùy thuộc vào từng loại trà, cần sử dụng nước sôi với nhiệt độ tương thích để khi pha chế có thể khơi dậy đầy đủ hương vị thơm ngon của trà. "
            },
            {
                href: "https://file.hstatic.net/1000075078/article/thecoffeehouse_vi_sao_trang_tra_3_bd9d8a35291c4010a71d1609d16e13b8_grande.jpg",
                time: "16/03/2022",
                title: "VÌ SAO PHẢI TRÁNG TRÀ TRƯỚC KHI PHA",
                text: "Từ ngàn xưa, tráng trà được xem là bước đầu tiên trong quy trình pha trà. Tráng trà không chỉ giúp loại bỏ các tạp chất trên bề mặt của lá trà, kích thích mùi thơm và hương vị trà còn có nhiều tác dụng khác. "
            },
            {
                href: "https://file.hstatic.net/1000075078/article/thecoffeehouse_amtusa_07_e9d40a62b6524ed7b5c3232c5031a493_grande.jpg",
                time: "09/03/2022",
                title: "CÁCH KHAI ẤM TỬ SA ĐỂ GỢI VỊ NGON CỦA TRÀ",
                text: "Đối với giới trà đạo đã quá quen thuộc với ấm tử sa vì nó nổi tiếng là loại ấm pha trà ngon bậc nhất. Pha trà bằng ấm tử sa thì hương vị của trà được hấp thụ một cách trọn vẹn và nếu như đã thưởng thức một lần thì thật khó quên. Thế nhưng, để đạt được điều tuyệt vời đó, việc đầu tiên và rất quan trọng đó là phải biết khai ấm tử sa đúng cách. "
            }
        ]
    },
    {
        title: "CoffeHolic",
        items: [
            {
                href: "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
                time: "11/03/2022",
                title: "CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT",
                text: "Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị của loại cà phê trứ danh này."
            },
            {
                href: "https://file.hstatic.net/1000075078/article/thecoffeehouse_caphe_7_db8def55acbf426ea725921529f6f01e_grande.jpg",
                time: "07/03/2022",
                title: "BẬT MÍ NHIỆT ĐỘ LÝ TƯỞNG ĐỂ PHA CÀ PHÊ NGON, ĐẬM ĐÀ HƯƠNG VỊ",
                text: "Nhiệt độ nước là một yếu tố quan trọng để có thể tạo nên những tách cà phê thơm ngon. Bạn đã biết nhiệt độ nước lý tưởng để pha cà phê đúng chuẩn? "
            },
            {
                href: "https://file.hstatic.net/1000075078/article/thecoffeehouse_caphe_2_aacf152c62064c40ab804a66ffc706d1_grande.jpg",
                time: "04/03/2022",
                title: "CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ",
                text: "Có nhiều cách để pha một ly cà phê ngon, nhưng đối với nhiều người Việt giây phút đợi chờ những giọt cà phê rơi từ chiếc phin đã trở thành nét văn hóa ăn sâu trong tiềm thức. Để tạo nên một ly cà phê phin chuẩn vị, không chỉ cần sự tinh tế trong cách chọn loại cà phê mà còn cả sự tỉ mỉ trong từng bước pha."
            }
        ]
    }
]

export const Experience: React.FC = () => {
    


    return (
        <div className="experience">
            <div className="container">
                <div className="title">
                    <div>
                    <img src="https://file.hstatic.net/1000075078/file/coffee-2_2_92db24958ff14ac4b4249b3256f7a415.png"/>
                    <span>Chuyện Nhà</span>
                    </div>
                </div>
                {
                    chuyenNha.map(chuyen => {
                        return (
                            <div className="content">
                                <div className="content-title">
                                    <span>{chuyen.title}</span>
                                </div>
                                <div className="content-menu">
                                    {
                                        chuyen.items.map(item => {
                                            return (
                                                <div className="menu-item">
                                                    <ExpItem items={item}  />
                                                    
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}