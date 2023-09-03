import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Caroussel = () => {
  return (
    <>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <img src="1.png" alt="1" />
        <img src="2.png" alt="2" />
        <img src="3.png" alt="3" />
        <img src="4.png" alt="4" />
        <img src="5.png" alt="5" />
      </Carousel>
    </>
  );
};
