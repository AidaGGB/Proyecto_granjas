import './Modificar.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Modificar () {
    return (
      <div>
        <div className="container-fluid overflow-hidden registro">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12" >
            <div className="card3">
              <a href="#"><i className="fas fa-times-circle"></i></a>
            <div className="card-body ">
                <div className="titleform2">
                  <h3 className="card-title">MODIFICAR REGISTRO</h3>
                </div>
                <form className="row g-3">
                  <div className="col-12">
                    <input type="text" className="form-control forminput2" id="granja" placeholder="Dulcinea"/>
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control forminput2" id="nombre" placeholder="Pepito Pedro"/>
                  </div>
                  <div className="col-md-6">
                    <input type="password" className="form-control forminput2" id="apellidos" placeholder="Perez Perez"/>
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control forminput2" id="ciudad" placeholder="Cota"/>
                  </div>
                  <div className="col-md-6">
                    <input type="password" className="form-control forminput2" id="direccion" placeholder="Km 7 via variante Cota/Cerezos"/>
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control forminput2" id="tel" placeholder="031 2333333"/>
                  </div>
                  <div className="col-md-6">
                    <input type="password" className="form-control forminput2" id="celu" placeholder="301 3333333"/>
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control forminput2" id="correo" placeholder="admindulcinea@gmail.com"/>
                  </div>
                  <div className="col-md-6">
                    <input type="password" className="form-control forminput2" id="ruta" placeholder="M1"/>
                  </div>
                 <div className="botonreg">
                    <button type="submit" className="btn-reg">Modificar</button>
                    <button type="submit" className="btn-reg2">Cerrar</button>
                  </div>
                  
                </form>
                
                
              </div>
            </div>
            </div>
          </div>    
        </div>
    </div> 
    );
  }
  
  export default Modificar;