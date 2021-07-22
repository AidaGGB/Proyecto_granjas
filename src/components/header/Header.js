import './Header.css';
import logo from './Logo.png';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Header () {
    return (
      <div>
        <div className="container-fluid overflow-hidden header">
		      <div className="row">
            <div className=" col-sm-12 col-md-12 col-lg-10" >
              <img src={logo} className="image-fluid"/>
            </div>

            <div className="boton col-sm-12 col-md-12 col-lg-2">
              <button type="button" className="regran"> Sistema REGRAN </button>
            </div>
			    </div>    
        </div>
      </div>
    );
  }
  
  export default Header;