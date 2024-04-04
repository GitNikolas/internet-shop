import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/Untitled_logo_1_free-file.jpg'
import Menu from '../Menu/Menu';

function Header() {
  return (
      <header className="header">
        <img src={logo} className='header__logo'></img>
        <Menu />
      </header>
  );
}

export default Header;
