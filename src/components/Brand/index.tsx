// import { useState, useEffect } from "react"
import { Button, Inform } from "../Button";
import "./style.css"
import pic1 from "./img/pic1.jpg"
import pic2 from "./img/pic2.jpg"

const button: Inform = {
    title: "Tìm hiểu thêm",
    backgroundColor: "#EA8025",
    width: "70%",
    height: "45px",
    color: "white",
    fontSize: "16px",
    borderRadius: "10px",
    border: "none"
}

export const Brand:React.FC = () => {

    return (
        <div id="Brand">
            <div className = "container">
                <div className="brand1">
                    <div className="brand-content">
                        <span>Trà Sen Nhãn Sum Vầy</span>
                        <p>Thức uống mang hương vị của nhãn, của sen, của trà Oolong đầy thanh mát cho tất cả các thành viên trong dịp Tết này. An lành, thư thái và đậm đà chính là những gì The Coffee House mong muốn gửi trao đến bạn và gia đình.</p>
                        <Button 
                            items={button}
                        />
                    </div>
                    <div className="brand-img">
                        <img src = {pic1}/>
                    </div>
                </div>
                <div className="brand1">
                    <div className="brand-img2">
                        <img src = {pic2}/>
                    </div>
                    <div className="brand-content2">
                        <span>Trà Dưa Đào Sung Túc</span>
                        <p>Vị thơm ngọt của Dưa lưới và đào tươi chua chua, ngọt ngọt trên nền trà Oolong trứ danh cùng lớp foam cheese mỏng nhẹ vị mặn mặn tạo nên sự cân bằng cho thức uống, sẽ đem đến cho bạn, gia đình và bạn bè những giai điệu tươi vui cho mùa xuân mới.

</p>
                        <Button 
                            items={button}
                        />      

                    </div>
                </div>
            </div>
        </div>
        
    )
}