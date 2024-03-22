import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Manage from './pages/Manage';
import Home from './pages/Home';
import Account from './pages/Account';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
    <>
      {location.pathname !== "/account/login" && location.pathname !== "/account/register" && <Navbar />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:subpageId" element={<AccountSubpages />} />
        </Routes>
      </div>
    </>
  );
}

function AccountSubpages() {
  const { subpageId } = useParams();

  return (
    <div>
      {subpageId === 'login' && <Login />}
      {subpageId === 'register' && <Register />}
      {/* Add cases for other 'account' subpages as needed */}
      {/* For example: */}
      {/* {subpageId === 'settings' && <Settings />} */}
    </div>
  );
}