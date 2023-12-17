import React, { useState } from 'react';
import './css/HomePage.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    const nextIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(nextIndex);
  };

  const slideRight = () => {
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="carousel-container"> 
      <button onClick={slideLeft}>{"<"}</button>
      <div className="carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`carousel-image ${index === currentIndex ? "active" : ""}`}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <button onClick={slideRight}>{">"}</button>
    </div>
  );
};

export default Carousel;