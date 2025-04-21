// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Changed to HashRouter
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from "./pages/About";
import Contact from './pages/Contact';
import Footer from './components/Footer';
import CustomsService from './pages/CustomsService';
import YobeGovernmentService from "./pages/YobeGovernmentService";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<div style={{ padding: '2rem' }}>Achievements Coming Soon</div>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customs-service" element={<CustomsService />} />
        <Route path="/yobe-government" element={<YobeGovernmentService />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
