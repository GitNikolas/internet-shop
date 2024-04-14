import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/Untitled_logo_1_free-file.jpg'
import Menu from '../Menu/Menu';
import { MobileMenu } from '../MobileMenu';
const mobileScreenWidth = 768;

function Header() {

  const [ screenWidth,setScreenWidth ] = useState(window.innerWidth);
  const [ openMenu, setOpenMenu ] = useState(false);
  
  function toggleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  useEffect(() => {
    const handleResize = (event:any) => {
      setScreenWidth(event.target.innerWidth);
      let screenWidth = event.target.innerWidth;
      if(screenWidth > 768) {
        setOpenMenu(false);
        document.body.classList.remove('no-scroll');
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [screenWidth])

  useEffect(() => {
    openMenu ? document.body.classList.add('no-scroll')
    : document.body.classList.remove('no-scroll');
  }, [openMenu])

  return (
      <header className="header">
        <img src={logo} className='header__logo'></img>
       { screenWidth > 768 ? <Menu /> : <MobileMenu isOpen={openMenu} toggleOpenMenu={toggleOpenMenu} />}
      </header>
  );
}

export default Header;
