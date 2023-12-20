import React from 'react';
import Map from '../components/map.jsx';
import { useState } from "react";
import { SearchBar } from "../components/SearchBar.jsx";
import { SearchResultsList } from "../components/SearchResultsList.jsx";
import Carousel from '../components/carousel.jsx';
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
        <Carousel data= "http://localhost:8080/api/events/1/all_event_pref" />

          {/* <div className='w-1/3 h-{400px}  bg-bluepers'></div> */}

          <div className='m-20 '>
            {/* <Map/> */}
          </div>
      
    </div>
  );
}

export default Home;