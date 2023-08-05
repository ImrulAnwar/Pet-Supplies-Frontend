import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/icons/logo.png';
import homeIcon from '../../assets/icons/home.png';
import shopIcon from '../../assets/icons/shop.png';
import cartIcon from '../../assets/icons/cart.png';
import profileIcon from '../../assets/icons/profile.png';
import Searchbar from '../Searchbar/Searchbar.jsx'; 
import Line from '../Line/Line'

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className='navbar'>
      <div className="container">
        <div className="left-section">
          <ul>
            <li className="logo"><img className = "logo icon" src={logo} alt="logo" /></li>
          </ul>
        </div>
        <div className="middle-section">
          <ul>
            <li>
            <Link className={`home link ${location.pathname === '/' ? 'active' : ''}`} to="/">
              <img className="home icon" src={homeIcon} alt="home" />
              Home
            </Link>
          </li>
          <li>
            <Link className={`shop link ${location.pathname === '/shop' ? 'active' : ''}`} to="/shop">
              <img className="shop icon" src={shopIcon} alt="profile" />
              Shop
            </Link>
          </li>
          </ul>
        </div>
        <div className="right-section">
          <ul className='icons'>
            <li><Searchbar /></li>
            <li><Link className='cart-icon link' to="/cart"><img className="cart icon" src={cartIcon} alt="cart" /></Link></li>
            <li><Link className='profile-icon link' to="/profile"><img className="profile icon" src={profileIcon} alt="profile" /></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navbar;
