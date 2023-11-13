import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import MapOptions from "./mapOptions";

const containerStyle = {
  width: "",
  height: "67.5vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const DirectionsMap = () => {
  return (
    <div class="DirectionsMap">
      <LoadScript googleMapsApiKey="AIzaSyCKQCPyNDaeSzTpxKGhmHP1noox2G_v6zc">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Add any additional components like markers or info windows here */}
          <MapOptions />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default DirectionsMap;
