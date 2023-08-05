import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import Profile from './pages/profile/Profile'
import Navbar from './layouts/Navbar/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App;

