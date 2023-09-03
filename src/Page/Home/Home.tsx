import { useEffect, useState } from "react";
import { Card } from "./Carousel/Card";
import { Catalog } from "./Catalog/Catalog";
import "./Home.css";
import { NewSlide } from "./Slide/NewSlide";
import { TodaySlide } from "./Slide/TodaySlide";
import { findAllProducts } from "../../Api/ProducService/ProductAPI";
import ProductReadResponse from "../../Api/ProducService/ProductResponse";
import { Link } from "react-router-dom";
import { Caroussel } from "./Carousel/Carousel";
import { Category } from "./Category/Category";

export const Home = () => {
  const [products, setProducts] = useState<ProductReadResponse[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await findAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="home">
        <div className="home_div">
          <Caroussel />
        </div>
        <div className="slide_div">
          <div className="slide_header">
            <div className="left">
              <h1 className="carousel_title">오늘의 작품</h1>
            </div>
            <div className="right">
              <Link to="/products">
                <h1 className="carousel_title">모든 작품 보기</h1>
              </Link>
            </div>
          </div>
          <TodaySlide products={products} />
        </div>
        <div className="slide_div">
          <div className="slide_header">
            <div className="left">
              <h1 className="carousel_title">신작</h1>
            </div>
            <div className="right">
              <Link to="/products">
                <h1 className="carousel_title">모든 작품 보기</h1>
              </Link>
            </div>
          </div>
          <NewSlide products={products} />
        </div>
        <Category />
        <Catalog />
      </section>
    </>
  );
};
