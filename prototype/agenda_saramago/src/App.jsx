import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar.jsx'
import Event_page from './pages/event_page.jsx';
import My_tickets from './pages/my_tickets.jsx';
import Profile from './pages/profile.jsx';
import Favourites from './pages/favourites.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/event_page" element={<Event_page />} />
        <Route path="/my_tickets" element={<My_tickets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
