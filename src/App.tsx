import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className='content'>
        <Products></Products>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
