import React from 'react'
import Register from '../components/Registerform/Register'
import Login from '../components/Login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Rendertemp from '../components/Rendertemp/Rendertemp';
import Renderbmi from '../components/Renderbmi/Renderbmi';
import Renderbp from '../components/Renderbp/Renderbp';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/rendertemp" element={<Rendertemp />} />
          <Route path="/renderbmi" element={<Renderbmi />} />
          <Route path="/renderbp" element={<Renderbp />} />
        </Routes>
      </Router>
      </>
  )
}

export default App

