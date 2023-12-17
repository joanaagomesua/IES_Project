import React from 'react';
import Map from '../components/map.jsx';
import { useState } from "react";
import { SearchBar } from "../components/SearchBar.jsx";
import { SearchResultsList } from "../components/SearchResultsList.jsx";

function Home() {

  const [results, setResults] = useState([]); 

  return (
    <div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

          {/* <div className='w-1/3 h-{400px}  bg-bluepers'></div> */}

          <div className='m-20 '>
            {/* <Map/> */}
          </div>
      
    </div>
  );
}

export default Home;