import React, { useEffect } from "react";
import { WiredCard } from "wired-elements";
import MapComponent from "./directionsMap";
import MapOptions from "./mapOptions";
import "../assets/css/styles.css";
import map from "../assets/img/download.jpeg";

const Map = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <wired-card class="small-card-map" elevation="2">
        <MapComponent />
      </wired-card>
    </div>
  );
};

export default Map;
