import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import event_page from "./pages/event_page";
import my_tickets from "./pages/my_tickets";
import profile from "./pages/profile";
import favourites from "./pages/favourites.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event_page" element={<event_page />} />
        <Route path="/my_tickets" element={<my_tickets />} />
        <Route path="/profile" element={<profile />} />
        <Route path="/favourites" element={<favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
