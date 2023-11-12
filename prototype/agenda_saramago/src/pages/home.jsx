import React from 'react';
import Map from '../components/map.jsx';
import Event from '../components/event.jsx';
import { WiredCard } from 'wired-elements';
import "../App.css";

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