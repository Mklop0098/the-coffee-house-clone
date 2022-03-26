import "./App.css";
import { Carousel, CarouselItem } from "./components/Carousel";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProductPage } from "./pages/Product";

const items: CarouselItem[] = [
  {
    href: "https://file.hstatic.net/1000075078/file/desktop_giam_30pt_alldrinks_tch_d2e8a14852854fdc9dbb3a9e8dbff8e1.jpeg",
    id: "1",
  },
  {
    href: "https://file.hstatic.net/1000075078/file/home_banner_-_web_moi_desktop_7e17c9b7c9544165a8bd8962c66a3766.jpeg",
    id: "2",
  },
  {
    href: "https://file.hstatic.net/1000075078/file/web_khai_truong_ch_moi_tch_7a26b41ef6a64a6f925b3db6c4996b1a.jpeg",
    id: "3",
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Carousel 
          items={items}
        /> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/collections/:id" element={<ProductPage />}></Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
