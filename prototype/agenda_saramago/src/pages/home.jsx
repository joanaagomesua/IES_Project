import React from 'react';
import Map from '../components/map.jsx';
import Event from '../components/event.jsx';
import "../assets/css/styles.css";
import Receiver from '../comms/Receiver';

function Home() {
  const [results, setResults] = useState([]);
  const [receiver, setReceiver] = useState(new Receiver());

    return (
    <div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>

          {/* <div className='w-1/3 h-{400px}  bg-bluepers'></div> */}

          <div className='m-20 '>
            <Map/>
          </div>
      
        <Event />
    </div>
  );
}

export default Home;