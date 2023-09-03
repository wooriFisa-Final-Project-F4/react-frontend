import React from "react";
import { AdminSidebar } from "./AdminSidebar/AdminSidebar";
import { ManageProduct } from "./Product/ManageProduct";
import "./Admin.css";
export const Admin = () => {
  return (
    <div className="adminpage">
      <div className="adminSideBar">
        <AdminSidebar />
      </div>
      <div className="main">
        <ManageProduct />
      </div>
    </div>
  );
};
