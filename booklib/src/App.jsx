import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Manage from './pages/Manage';
import Home from './pages/Home';
import Account from './pages/Account';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/manage' element={<Manage />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </div>
    </>
  )
}

export default App
