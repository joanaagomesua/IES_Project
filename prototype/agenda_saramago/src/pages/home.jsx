import React from 'react';
import Map from '../components/map.jsx';
import Event from '../components/event.jsx';
import { useState } from "react";
import { SearchBar } from "../components/SearchBar.jsx";
import { SearchResultsList } from "../components/SearchResultsList.jsx";
import "../assets/css/styles.css";

function Home() {

  const [results, setResults] = useState([]); 

  return (
    <div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>

      <div className="relative m-10 flex ">
          {/* <div className='w-1/3 h-{400px}  bg-bluepers'></div> */}

          <div className='w-2/3 '>
            <Map/>
          </div>
      </div>
        <Event />
    </div>
  );
}

export default Home;