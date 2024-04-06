import React from 'react';
import './Menu.css';
import { Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { signOut } from '../../utils/usersApi/usersApi';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { clearUserValue } from '../../app/User/userSlice';

function Menu() {

  const navigate = useNavigate();

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
        <Link to='/' className="menu__link">На главную</Link>
        <Link to='/catalog' className="menu__link">Каталог</Link>
        <Link to='/basket' className="menu__link">Корзина</Link>
        <Link to='/profile' className="menu__link">Профиль</Link>
        <button className="menu__leave-button" onClick={handleSignOut}>Выйти</button>
      </menu>
      );
  } else {
    return (
      <menu className="menu">
        <Link to='/' className="menu__link">На главную</Link>
        <Link to='/catalog' className="menu__link">Каталог</Link>
        <Link to='/basket' className="menu__link">Корзина</Link>
        <Link to='/sign-up' className="menu__link">Регистрация</Link>
        <Link to='/sign-in' className="menu__link">Войти</Link>
      </menu>
      );
  }

}

export default Menu;
