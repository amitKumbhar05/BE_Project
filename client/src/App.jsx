// App.js
import React, { useState } from 'react';
// import './App.css';  // You can use Tailwind CSS instead for styling
import VideoUpload from './components/VideoUpload';
import Login from "./components/auth/Login.jsx";
import { Routes, Route } from 'react-router-dom'
import Signup from './components/auth/Signup.jsx';
function App() {
  return (
    <Routes>
      <Route path="/" element={<VideoUpload />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* Add more routes for other pages */}
    </Routes>
  )
}

export default App;
