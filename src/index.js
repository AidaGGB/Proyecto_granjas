import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header/>
      <Footer/>
        
    </div>
  
  </React.StrictMode>,
  document.getElementById('root')
);

