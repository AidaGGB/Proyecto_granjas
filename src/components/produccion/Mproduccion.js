import './Produccion.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Mproduccion () {
    return (
      <div className="modal" tabindex={-1} id="lactea" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header headerp">
              <h5 className="modal-title">Registro diario de producción de leche</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bodyp">
              <form className="row g-3">
                <div className="col-md-6 mb-3 modalp">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Fecha:</label>
                  <input type="date" className="form-control2" id="inputEmail3"/>
                </div>
                <div className="col-md-6 mb-3 modalp">
                  <label for="inputPassword3" className="col-sm-2 col-form-label2">Registro:</label>
                  <input type="text" className="form-control2" id="inputPassword3" placeholder="Cantidad/litros"/>
                </div>
              </form>    
            </div>
            <div className="modal-footer footerp">
              <button type="submit" className="btn-reg" onClick={()=>{alert('Información guardada correctamente')}}>Guardar</button>
              <button type="submit" className="btn-reg2"  data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Mproduccion;