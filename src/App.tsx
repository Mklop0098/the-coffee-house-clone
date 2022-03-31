import "./App.css";
import { Carousel, CarouselItem } from "./components/Carousel";
import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
import { HomePage } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProductsPage } from "./pages/Products";
import { ProductPage } from "./pages/Product";
import { TeaPage } from "./pages/TeaPage";
import { Footer } from "./components/Footer";

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
          <Route path="/collections/:id" element={<ProductsPage />}></Route>
          <Route path="/tea/:id" element={<TeaPage />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
