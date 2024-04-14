import React, { useState, useEffect } from 'react';
import './Menu.css';
import { Link, useLocation, Navigate, useNavigate, useMatch } from 'react-router-dom';
import { signOut } from '../../utils/usersApi/usersApi';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { clearUserValue } from '../../app/User/userSlice';

function Menu() {

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();
	const user = useAppSelector(state => state.user.value);

  function handleSignOut(){
    dispatch(clearUserValue());
    signOut();
    localStorage.clear();
  }
  
  if(user.isAuthorized) {
    return (
      <menu className="menu">
        <Link to='/' className={`menu__link ${location.pathname === '/' && 'menu__link__current'}`}>На главную</Link>
        <Link to='/catalog' className={`menu__link ${location.pathname === '/catalog' && 'menu__link__current'}`}>Каталог</Link>
        <Link to='/basket' className={`menu__link ${location.pathname === '/basket' && 'menu__link__current'}`}>Корзина</Link>
        <Link to='/profile' className={`menu__link ${location.pathname === '/profile' && 'menu__link__current'}`}>Профиль</Link>
        <Link to='/about-project' className={`menu__link ${location.pathname === '/about-project' && 'menu__link__current'}`}>О проекте</Link>
        <button className="menu__leave-button" onClick={handleSignOut}>Выйти</button>
      </menu>
      );
  } else {
    return (
      <menu className="menu">
        <Link to='/' className={`menu__link ${location.pathname === '/' && 'menu__link__current'}`}>На главную</Link>
        <Link to='/catalog' className={`menu__link ${location.pathname === '/catalog' && 'menu__link__current'}`}>Каталог</Link>
        <Link to='/basket' className={`menu__link ${location.pathname === '/basket' && 'menu__link__current'}`}>Корзина</Link>
        <Link to='/sign-up' className={`menu__link ${location.pathname === '/sign-up' && 'menu__link__current'}`}>Регистрация</Link>
        <Link to='/sign-in' className={`menu__link ${location.pathname === '/sign-in' && 'menu__link__current'}`}>Войти</Link>
        <Link to='/about-project' className={`menu__link ${location.pathname === '/about-project' && 'menu__link__current'}`}>О проекте</Link>
      </menu>
      );
  }

}

export default Menu;
