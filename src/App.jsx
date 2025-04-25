import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CadastrarItem from './pages/CadastrarPage';
import FoundlyItens from './components/foundlyItens/FoundlyItens';


function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path='/cadastrar-item' element={<CadastrarItem/>}/>
          <Route path='/foundly' element={<FoundlyItens/>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
