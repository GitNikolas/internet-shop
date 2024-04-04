import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';
import Basket from './components/Basket/Basket';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import { Profile } from './components/Profile';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='content'>
        <Routes>
          <Route
          path='/'
          element={<Main />}
          />

          <Route
          path='/basket'
          element={<Basket />}
          />

          <Route
          path='/sign-up'
          element={<Registration />}
          />

          <Route
          path='/sign-in'
          element={<Login />}
          />

          <Route
          path='/catalog'
          element={<Catalog />}
          />

          <Route
          path='/profile'
          element={<Profile />}
          />

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
