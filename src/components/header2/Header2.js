import './Header2.css';
import logo from './Logo.png';
import Menu from '../menu/Menu';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Header2 () {
    return (
      <div>
        <div className="container-fluid overflow-hidden header">
		      <div className="row">
        
            <div className="menu col-sm-6 col-md-6 col-lg-8" >
              <Menu/>
              <img src={logo} className="image-fluid"/>
            </div>

            <div className="boton col-sm-6 col-md-6 col-lg-4">
              <button type="button" className="regran"><i className="fas fa-power-off"></i> Cerrar Sesiòn </button>
              <button type="button" className="regresar"><i className="fas fa-chevron-circle-left"></i> Regresar </button>
            </div>
			    </div>    
        </div>
      </div>
    );
  }
  
  export default Header2;