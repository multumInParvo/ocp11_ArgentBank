// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
       
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;