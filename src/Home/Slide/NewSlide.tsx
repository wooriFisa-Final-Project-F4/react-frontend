import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const NewSlide = () => {
  const images: string[] = [
    "1.jpg",
    "2.jpeg",
    "3.jpeg",
    "4.webp",
    "5.webp",
    "6.webp",
    "7.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 6;
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - itemsToShow : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - itemsToShow ? 0 : prev + 1
    );
  };

  return (
    <div className="container c_flex">
      <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            transform: `translateX(-${(100 / images.length) * currentIndex}%)`,
            transition: "transform 0.5s",
          }}
        >
          {images.map((image, index) => (
            <div className="slide_card">
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                style={{
                  padding: "6px",
                  flex: "0 0 auto",
                  height: "200px",
                  backgroundColor: "black",
                }}
              />
              <h3>작품</h3>
              <h4>₩ 1,000,000</h4>
            </div>
          ))}
        </div>
        <ArrowBackIosIcon
          onClick={prevSlide}
          style={{
            fontSize: "40px",
            position: "absolute",
            top: "50%",
            left: "20",
            color: "white",
          }}
        />

        <ArrowForwardIosIcon
          onClick={nextSlide}
          style={{
            fontSize: "40px",
            position: "absolute",
            top: "50%",
            right: "20",
            color: "white",
          }}
        />
      </div>
    </div>
  );
};
