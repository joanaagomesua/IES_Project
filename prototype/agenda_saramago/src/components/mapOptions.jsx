import React from "react";
import "wired-elements";
import "../assets/css/styles.css";

const MapOptions = () => {
  return (
    <div className="flex justify-center items-center p-4 gap-4 relative">
        <wired-combo id="combo" selected="two">
        <wired-item value="one">Number One</wired-item>
        <wired-item value="two">Number Two</wired-item>
        <wired-item value="three">Number Three</wired-item>
        </wired-combo>
    </div>
  );
};

export default MapOptions;
