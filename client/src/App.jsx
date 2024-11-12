// App.js
import React, { useState } from 'react';
// import './App.css';  // You can use Tailwind CSS instead for styling
import VideoUpload from './components/videoupload/VideoUpload.jsx';
import Login from "./components/auth/Login.jsx";
import { Routes, Route } from 'react-router-dom'
import Signup from './components/auth/Signup.jsx';
import Homepage from './components/Homepage/Homepage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Features from './pages/Features.jsx';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/videopro" element={<VideoUpload />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/features" element={<Features />} />
      {/* Add more routes for other pages */}
    </Routes>
  )
}

export default App;
