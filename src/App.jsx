import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EditProfile from './pages/editProfile'; 
import BuscarItem from './pages/BuscarItem';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/buscar-item" element={<BuscarItem />} />
      </Routes>
    </Router>
  );
}

export default App;
