import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    const initMap = () => {
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      const directionsService = new window.google.maps.DirectionsService();
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 41.85, lng: -87.65 },
        disableDefaultUI: true,
      });

      directionsRenderer.setMap(map);
      directionsRenderer.setPanel(document.getElementById("sidebar"));

      const onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
      };

      document.getElementById("start").addEventListener("change", onChangeHandler);
      document.getElementById("end").addEventListener("change", onChangeHandler);
      document.getElementById("mode").addEventListener("change", onChangeHandler);
    };

    const calculateAndDisplayRoute = (directionsService, directionsRenderer) => {
      const start = document.getElementById("start").value;
      const end = document.getElementById("end").value;
      const selectedMode = document.getElementById("mode").value;

      directionsService.route({
        origin: start,
        destination: end,
        travelMode: window.google.maps.TravelMode[selectedMode],
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
    };

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly';
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        initMap();
      };
    };

    loadScript();

    return () => {
      // Cleanup: remove script and event listeners if component unmounts
    };
  }, []);

  return (
    <div id="container">
      <div id="floating-panel">
        {/* Start and End Dropdowns, Mode of Travel Dropdown */}
      </div>
      <div id="map" style={{ flexGrow: 4, height: '100%' }}></div>
      <div id="sidebar" style={{ flexGrow: 1, padding: '1rem', maxWidth: '30rem', height: '100%', boxSizing: 'border-box', overflow: 'auto' }}></div>
    </div>
  );
};

export default MapComponent;
