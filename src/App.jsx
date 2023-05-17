import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormImbarca from './pages/FormImbarca';
import Home from './pages/Home';
import React from 'react';
import Login from './pages/Login';


const App = () => {

  return (
    <Router>
      
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Home" element ={<Home />} />
          <Route path="Imbarca" element={<FormImbarca />} />
      </Routes>
    
    </Router>

  );
};

export default App