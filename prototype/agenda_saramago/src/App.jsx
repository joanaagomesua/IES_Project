import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar.jsx'
import Event_page from './pages/event_page.jsx';
import My_tickets from './pages/my_tickets.jsx';
import Profile from './pages/profile.jsx';
import Favourites from './pages/favourites.jsx'; 
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Favicon from "react-favicon"; 
import logo from "./assets/images/logo.png";

function App() {
  const faviconUrl = useState(logo); 

  return (
    <BrowserRouter>
    <Favicon url={faviconUrl} /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/event_page" element={<Event_page />} />
        <Route path="/my_tickets" element={<My_tickets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
