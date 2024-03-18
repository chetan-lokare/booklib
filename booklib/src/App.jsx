import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Manage from './pages/Manage';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/manage' element={<Manage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
