import './Historial.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Resultadoh () {
    return (
      <div className="modal" tabindex={-1} id="filtroh" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header headerp">
              <h5 className="modal-title">Resultados de busqueda</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bodyh">
              <p>Segun los datos ingresados de la granja  Dulcinea, del 09/07/2021 al 23/07/2021, la cantidad de leche es de:      000000 litros.</p>    
            </div>
            <div className="modal-footer footerp">
              <button type="submit" className="btn-reg2"  data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Resultadoh;