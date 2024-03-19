import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Manage from './pages/Manage';
import Home from './pages/Home';
import Account from './pages/Account';
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/manage' element={<Manage />} />
          <Route path='/account' element={<Account />} />
          <Route path='/account/login' element={<Login />} />
          <Route path='/account/register' element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App
