import React from "react";
import {
  FavoriteBorderOutlined,
  NotificationsNone,
  PersonOutline,
  ShoppingBagOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import "./Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <section className="footer">
      <div className="icons">
        <div className="icon">
          <Link to="/mypage">
            <i>
              <PersonOutline className="footer_icon" />
            </i>
          </Link>
        </div>
        <div className="noti">
          <Link to="/cart">
            <i>
              <NotificationsNone className="footer_icon" />
            </i>
            <span>0</span>
          </Link>
        </div>
        <div className="icon">
          <Link to="/">
            <i>
              <HomeOutlined
                style={{
                  fontSize: "40px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "50px",
                }}
              />
            </i>
            <span>0</span>
          </Link>
        </div>
        <div className="icon">
          <Link to="/cart">
            <i>
              <FavoriteBorderOutlined className="footer_icon" />
            </i>
          </Link>
        </div>
        <div className="icon">
          <Link to="/cart">
            <i>
              <ShoppingBagOutlined className="footer_icon" />
            </i>
            <span>0</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
