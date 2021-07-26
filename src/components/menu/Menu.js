import './Menu.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Menu () {
    return (
           

                <div className="dropdown">
                  <button className="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <div class='barry'>
                      <span class='bar'></span>
                      <span class='bar'></span>
                      <span class='bar'></span>
                      <span class='bar'></span>
                    </div>
                  </button>
                  
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <div>
                      <li><a className="dropdown-item" data-bs-toggle="collapse"  href="#">Inicio</a></li>
                      <li><a className="dropdown-item" data-bs-toggle="collapse" href="#">Nuestras granjas</a></li>
                      <li><a className="dropdown-item" data-bs-toggle="collapse" href="#">Producción láctea</a></li>
                    </div>
                  </ul>
              </div>
		

    );
  }
  
  export default Menu;