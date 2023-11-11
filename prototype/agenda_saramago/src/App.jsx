import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import event_page from './pages/event_page';
import navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter >
      <navbar className="bg-[#19A7CE]" />
      <Routes>
      <Route path="/" element={<event_page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
