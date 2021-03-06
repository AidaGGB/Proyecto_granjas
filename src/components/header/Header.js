import './Header.css';
import logo from './Logo.png';
import React from "react";
import {Link} from "react-router-dom";

function Header () {
    return (
      <div>
        <div className="container-fluid overflow-hidden header">
		      <div className="row">
            <div className=" col-sm-6 col-md-6 col-lg-10" >
              <img src={logo} className="image-fluid" alt="" />
            </div>

            <div className="boton col-sm-6 col-md-6 col-lg-2">
              <Link to="/inicios"><button type="button" className="regran"> Sistema REGRAN </button></Link>
            </div> 
			    </div>    
        </div>
      </div>
    );
  }
  
  export default Header;