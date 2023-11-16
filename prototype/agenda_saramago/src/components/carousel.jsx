'use client';
import { Carousel } from 'flowbite-react';
import React from 'react';

function CarouselWithContent() {
  return (
    <div className="h-96 w-64 "> {/* Ajuste as classes conforme necessário */}
      <Carousel>
      <div className="relative inline-block group">
        <img src="/src/assets/images/poster_similar1.png" alt="..." className="block w-full h-auto group-hover:grayscale group-hover:opacity-75 transition-all duration-300"/>
        <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-gray-800 bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
          <div className="z-10 relative text-center">
            <p className="font-poppins font-bold text-white text-center mb-2">Some stuff about this very important event for kids</p>
            <button className="bg-transparent hover:bg-green-300 text-white font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">
              More
            </button>
          </div>
        </div>
      </div>
      <div className="relative inline-block group">
        <img src="/src/assets/images/poster_similar2.png" alt="..." className="block w-full h-auto group-hover:grayscale group-hover:opacity-75 transition-all duration-300"/>
        <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-gray-800 bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
          <div className="z-10 relative text-center">
            <p className="font-poppins font-bold text-white text-center mb-2">Some stuff about this very important event for kids</p>
            <button className="bg-transparent hover:bg-green-300 text-white font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">
              More
            </button>
          </div>
        </div>
      </div>
      <div className="relative inline-block group">
        <img src="/src/assets/images/poster_similar3.png" alt="..." className="block w-full h-auto group-hover:grayscale group-hover:opacity-75 transition-all duration-300"/>
        <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-gray-800 bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
          <div className="z-10 relative text-center">
            <p className="font-poppins font-bold text-white text-center mb-2">Some stuff about this very important event for kids</p>
            <button className="bg-transparent hover:bg-green-300 text-white font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">
              More
            </button>
          </div>
        </div>
      </div>
      </Carousel>
    </div>
  );
}

export default CarouselWithContent;