import React from "react";
import Sidebar from "./Sidebar";
import { ProductList } from "./ProductList";
import "./Products.css";
export const Products = () => {
  return (
    <div className="products">
      <Sidebar />
      <ProductList />
    </div>
  );
};
