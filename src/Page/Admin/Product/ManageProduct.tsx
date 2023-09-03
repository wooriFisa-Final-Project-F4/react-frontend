import React from "react";
import { AddProduct } from "./AddProduct";
import { AllProduct } from "./AllProduct";

export const ManageProduct = () => {
  return (
    <>
      <div>
        <h1>상품 관리</h1>
        <AddProduct />
        <h1>모든 상품</h1>
        <AllProduct />
      </div>
    </>
  );
};
