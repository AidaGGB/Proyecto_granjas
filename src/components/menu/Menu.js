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
           

                <div className="dropdown ">
                  <button className="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <div class='barry'>
                      <span class='bar'></span>
                      <span class='bar'></span>
                      <span class='bar'></span>
                      <span class='bar'></span>
                    </div>
                  </button>
                  
                  <ul className="dropdown-menu position-fixed" aria-labelledby="dropdownMenuButton1">
                    <div>
                      <li>
                        <Link to="/index" className="dropdown-item">Inicio</Link>
                      </li>
                      <li>
                        <Link to="/granjas" className="dropdown-item">Nuestras granjas</Link>
                      </li>
                      <li>
                        <Link to="/produccion" className="dropdown-item">Producción láctea</Link>
                      </li>
                    </div>
                  </ul>
              </div>
		

    );
  }
  
  export default Menu;