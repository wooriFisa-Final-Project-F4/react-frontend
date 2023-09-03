import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductReadResponse from "../../../Api/ProducService/ProductResponse"; // 경로는 실제 경로에 맞게 수정해주세요.
import { Link } from "react-router-dom";
import "./Slide.css";
export const NewSlide = ({ products }: { products: ProductReadResponse[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 6;

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - itemsToShow : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === products.length - itemsToShow ? 0 : prev + 1
    );
  };

  return (
    <div className="slide-container">
      <div
        className="slide-flex"
        style={{
          transform: `translateX(-${(100 / products.length) * currentIndex}%)`,
        }}
      >
        {products.map((product, index) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div className="slide-card">
              <img src={product.images[0]} alt={`Slide ${index}`} />
              <div className="slide-content">
                <h3>{product.name}</h3>
                <h4>
                  ₩ {parseInt(product.auctionPrice, 10).toLocaleString("ko-KR")}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ArrowBackIosIcon
        onClick={prevSlide}
        className={`arrowIcon arrowIcon--left`}
      />
      <ArrowForwardIosIcon
        onClick={nextSlide}
        className={`arrowIcon arrowIcon--right`}
      />
    </div>
  );
};
