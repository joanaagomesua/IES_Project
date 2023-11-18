import React from 'react';
import Map from '../components/map.jsx';
import Event from '../components/event.jsx';
import "../assets/css/styles.css";

function Home() {
  return (
    <div>
      <div className="relative mix-blend-overlay m-10 flex">
        <div className='w-1/3 h-{400px}  bg-bluepers'></div>

        <div className='w-2/3'>
          <Map/>
        </div>
      </div>
        <Event />
    </div>
  );
}

export default Home;