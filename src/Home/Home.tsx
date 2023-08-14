import { Card } from "./Carousel/Card";
import { Carroussel } from "./Carousel/Carousel";
import { Catalog } from "./Catalog/Catalog";
import "./Home.css";
import { NewSlide } from "./Slide/NewSlide";
import { TodaySlide } from "./Slide/TodaySlide";

export const Home = () => {
  const cards = [
    {
      key: "1",
      content: (
        <Card
          imagen="1.jpg"
          name="Product1"
          releaseDate="2023-01-01"
          price="₩100,000"
        />
      ),
    },
    {
      key: "2",
      content: (
        <Card
          imagen="2.jpeg"
          name="Product2"
          releaseDate="2023-02-01"
          price="₩200,000"
        />
      ),
    },
    {
      key: "3",
      content: (
        <Card
          imagen="3.jpeg"
          name="Product3"
          releaseDate="2023-03-01"
          price="₩300,000"
        />
      ),
    },
    {
      key: "4",
      content: (
        <Card
          imagen="4.webp"
          name="Product4"
          releaseDate="2023-04-01"
          price="₩400,000"
        />
      ),
    },
    {
      key: "5",
      content: (
        <Card
          imagen="5.webp"
          name="Product5"
          releaseDate="2023-05-01"
          price="₩500,000"
        />
      ),
    },
  ];
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
  return (
    <>
      <section className="home">
        <div className="home_div">
          <div className="container f_flex">
            <h1 className="carousel_title">경매 마감 임박 작품</h1>
            <Carroussel
              cards={cards}
              height="550px"
              width="100%"
              goToSlide={300}
              offset={300}
              showArrows={false}
            />
          </div>
        </div>{" "}
        <div className="slide_div">
          <div className="slide_header">
            <div className="left">
              <h1 className="carousel_title">오늘의 작품</h1>
            </div>
            <div className="right">
              <h1 className="carousel_title">모든 작품 보기</h1>
            </div>
          </div>
          <TodaySlide />
        </div>
        <div className="slide_div">
          <div className="slide_header">
            <div className="left">
              <h1 className="carousel_title">신작</h1>
            </div>
            <div className="right">
              <h1 className="carousel_title">모든 작품 보기</h1>
            </div>
          </div>
          <NewSlide />
        </div>
        <Catalog />
      </section>
    </>
  );
};
