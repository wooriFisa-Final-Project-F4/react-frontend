import React from "react";
import "./App.css";
import { Header } from "./Home/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import { Footer } from "./Home/Footer/Footer";
import { Product } from "./Product/Product";
import { Products } from "./Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
