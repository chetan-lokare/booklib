import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Manage from './pages/Manage';
import Home from './pages/Home';

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/manage":
      Component = Manage;
      break;  
    
    default:
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Component />
      </div>
    </>
  )
}

export default App
