import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/top-bar/TopBar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Data from "./components/Data";
import SalePage from "./pages/SalePage";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sale" element={<SalePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
