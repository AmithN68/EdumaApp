import React from 'react';
import Styles from "./_slider.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import Slider1 from "../assets/slider2.jpg";
import Slider2 from "../assets/slider1.jpg";
import Slider3 from "../assets/slider3.jpg";

const CarouselPage = () => {
  return (
    <Carousel
      showArrows={false}
      autoPlay
      showThumbs={false}
      stopOnHover={true}
      className={Styles.Carousel}
    >
      <div>
        <img src={Slider1} alt="slider1" width="100%" height="90%" />
        <aside>
          <h2>Better education for a better</h2>
          <h1>Better World</h1>
          <button>buy eduma now</button>
        </aside>
      </div>
      <div>
        <img src={Slider2} alt="slider2" width="100%" height="90%" />
        <aside>
          <h2>Based on the best lms plugin</h2>
          <h1>learnPress</h1>
          <button>buy eduma now</button>
        </aside>
      </div>
      <div>
        <img src={Slider3} alt="slider3" width="100%" height="90%" />
        <aside>
          <h2>The best theme for</h2>
          <h1>Education</h1>
          <button>buy eduma now</button>
        </aside>
      </div>
    </Carousel>
  );
}

export default CarouselPage;
