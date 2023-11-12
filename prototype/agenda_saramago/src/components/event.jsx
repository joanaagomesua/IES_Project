import React from "react";
import { WiredCard } from "wired-elements";
import "../assets/css/styles.css";

const Event = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <wired-card class="small-card-event">
        <p>Events</p>
      </wired-card>
    </div>
  );
};

export default Event;