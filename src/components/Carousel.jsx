import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img src="/images/property1.jpg" alt="Property 1" />
        </div>
        <div>
          <img src="/images/property2.jpg" alt="Property 2" />
        </div>
        <div>
          <img src="/images/property3.jpg" alt="Property 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
