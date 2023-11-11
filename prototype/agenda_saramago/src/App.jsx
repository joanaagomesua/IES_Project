import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar.jsx';

function App() {
  return (
    <BrowserRouter >
      <Navbar className="bg-[#19A7CE]" />
      <Routes>
      <Route path="/" element={<event_page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
