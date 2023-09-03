import React from "react";
import "./Category.css";
export const Category = () => {
  return (
    <div className="categoriess">
      <div className="category-card">
        <img src="painting.jpg" alt="painting" style={{ height: "500px" }} />
        <h3>Painting</h3>
      </div>
      <div className="category-card">
        <img src="sculpture.jpg" alt="sculpture" />
        <h3>Sculpture</h3>
      </div>
      <div className="category-card">
        <img src="photo.jpg" alt="photos" style={{ height: "330px" }} />
        <h3>Photo</h3>
      </div>
      <div className="category-card">
        <img src="drawing.jpg" alt="drawing" />
        <h3>Drawing</h3>
      </div>
      <div className="category-card">
        <img src="printing.jpg" alt="painting" style={{ height: "329px" }} />
        <h3>Printing</h3>
      </div>
      <div className="category-card">
        <img
          src="fiberart.jpg"
          alt="painting"
          style={{ width: "441px", height: "270px" }}
        />
        <h3 style={{ top: "50%", left: "25%" }}>Fiber art</h3>
      </div>
    </div>
  );
};
