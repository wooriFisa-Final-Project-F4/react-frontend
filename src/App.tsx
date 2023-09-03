import React from "react";
import "./App.css";
import { Header } from "./Page/Home/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home/Home";
import { Login } from "./Page/Login/Login";
import { Register } from "./Page/Register/Register";
import { Footer } from "./Page/Home/Footer/Footer";
import { Product } from "./Page/Products/Product/Product";
import { Products } from "./Page/Products/Products";
import { Admin } from "./Page/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
