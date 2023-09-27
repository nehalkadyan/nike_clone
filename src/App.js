import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/top-bar/TopBar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SalePage from "./pages/SalePage";
import SingleProduct from "./components/single-product/SingleProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/cart/Cart";
import SneakerPage from "./pages/SneakerPage";



function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/single/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/snkr" element={<SneakerPage />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
