'use client';
import { Carousel } from 'flowbite-react';
import React from 'react';

function CarouselWithContent() {
  return (
    <div className="h-40 w-64"> {/* Ajuste as classes conforme necessário */}
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
  );
}

export default CarouselWithContent;