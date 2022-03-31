import "./style.css";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="container-topic">
          <div className="topic-1">
            <div className="container-topic__item">
              <p>Giới thiệu</p>
              <p className="item">Về Chúng Tôi</p>
              <p className="item">Sản phẩm</p>
              <p className="item">Khuyến mãi</p>
              <p className="item">Chuyện cà phê</p>
              <p className="item">Cửa Hàng</p>
              <p className="item">Tuyển dụng</p>
            </div>
            <div className="container-topic__item">
              <p>Điều khoản</p>
              <p className="item">Điều khoản sử dụng</p>
              <p className="item">Quy tắc bảo mật</p>
            </div>
          </div>
          <div className="topic-2">
            <div className="container-topic__item">
              <div className="container-item-img">
                <img src="https://file.hstatic.net/1000075078/file/phone_0a42df1c753c4fa0910108daa73fe2ef.png" />
                <p style={{ paddingLeft: "7px" }}>Đặt hàng: 1800 6936</p>
              </div>
              <div className="container-item-img">
                <img src="https://file.hstatic.net/1000075078/file/map-pin-2-line_575ccb91b6f94a308d1bd507d4ae72a7.png" />
                <p style={{ paddingLeft: "7px" }}>Liên hệ</p>
              </div>
              <p className="item">
                <span
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Tầng 3-4 Hub Building
                  <br />
                  195/10E Điện Biên Phủ, P.15,
                  <br />
                  Q.Bình Thạnh, TP.Hồ Chí Minh
                </span>
              </p>
            </div>
            <div className="container-topic__contact">
              <div className="up-img">
                <img
                  src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/239270325_3045507619056577_531106232057750834_n.jpg?stp=cp0_dst-jpg_p74x74&_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=SY-rwEcIS1wAX-e_StY&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT_hs0wTTv-kqJ1kFx6owuAAbJ3Srr1Zhbo9UUmuI3uHYg&oe=623EA4CA"
                  alt=""
                />
                <div className="up-content">
                  <span className="sp">The Coffe House</span>
                  <p className="p">607.331 lượt thích</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
