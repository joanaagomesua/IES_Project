import React from 'react';
import Map from '../components/map.jsx';
import { useState } from "react";
import { SearchBar } from "../components/SearchBar.jsx";
import { SearchResultsList } from "../components/SearchResultsList.jsx";
import Carousel_city from '../components/carousel_city.jsx';
import Carousel_companies from '../components/carousel_companies.jsx';
import Carousel_tags from '../components/carousel_tags.jsx';

function Home() {

  const [results, setResults] = useState([]); 

  return (
    <div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <div className="carousel-container" class="mt-16 mr-40 mb-16 ml-40 ">
        <Carousel_city />
      </div>
      <div className="carousel-container" class="mt-16 mr-40 mb-16 ml-40 ">
        <Carousel_tags />
      </div>
      <div className="carousel-container" class="mt-16 mr-40 mb-16 ml-40 ">
        <Carousel_companies />
      </div>

          {/* <div className='w-1/3 h-{400px}  bg-bluepers'></div> */}

          <div className='m-20 '>
            {/* <Map/> */}
          </div>
      
    </div>
  );
}

export default Home;