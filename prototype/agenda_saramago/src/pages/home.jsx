import React from 'react';
import Map from '../components/map.jsx';
import { useState } from "react";
import { SearchBar } from "../components/SearchBar.jsx";
import { SearchResultsList } from "../components/SearchResultsList.jsx";
import Carousel from '../components/carousel.jsx';

function Home() {

  const [results, setResults] = useState([]); 

  return (
    <div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <div className="carousel-container" class="mt-16 mr-40 mb-16 ml-40 ">
        < h2> Close to you </h2>
        <Carousel />
      </div>

          {/* <div className='w-1/3 h-{400px}  bg-bluepers'></div> */}

          <div className='m-20 '>
            {/* <Map/> */}
          </div>
      
    </div>
  );
}

export default Home;