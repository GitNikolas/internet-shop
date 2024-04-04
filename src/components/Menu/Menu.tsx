import React from 'react';
import './Menu.css';
import { Link, useLocation } from 'react-router-dom';

function Menu() {
  return (
  <menu className="menu">
    <Link to='/' className="menu__link">На главную</Link>
    <Link to='/catalog' className="menu__link">Каталог</Link>
    <Link to='/basket' className="menu__link">Корзина</Link>
    <Link to='/profile' className="menu__link">Профиль</Link>
    <Link to='/sign-up' className="menu__link">Регистрация</Link>
    <Link to='/sign-in' className="menu__link">Войти</Link>
  </menu>
  );
}

export default Menu;
