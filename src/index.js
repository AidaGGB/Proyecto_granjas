import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Header2 from './components/header2/Header2';
import Pprincipal from './components/pprincipal/Pprincipal';
import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Inicio from './components/inicio/Inicio';
import Granjas from './components/granjas/Granjas';

ReactDOM.render(
  <React.StrictMode>
    <div>
    
      <Header2/>
      <Granjas/>
      <Footer/>
        
    </div>
  
  </React.StrictMode>,
  document.getElementById('root')
);

