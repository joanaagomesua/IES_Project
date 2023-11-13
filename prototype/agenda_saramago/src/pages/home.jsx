import React from 'react';
import Map from '../components/map.jsx';
import Event from '../components/event.jsx';
import "wired-elements";
import "../assets/css/styles.css";

function Home() {
  return (
    <div>
        <wired-card class="full-page-card">
        <Map />
        <Event />
        </wired-card>
    </div>
  );
}

export default Home;