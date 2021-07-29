import './Produccion.css';
import perfil from './granjaperfil.jpeg';
import Mproduccion from './Mproduccion';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Produccion () {
    return (
      <div className="container-fluid overflow-hidden">
          <div className="row granjas">
                  <div className=" col-sm-12 col-md-12 col-lg-8" >
                    <h1>PRODUCCIÓN LÁCTEA</h1>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4" >
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="¿Que granja estas buscando?"   aria-label="Amount (to the nearest dollar)"/>
                      <span className="input-group-text"><i className="fas fa-search"></i></span>
                    </div>
                  </div>
                  
          </div>

          
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card2">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">Dulcinea</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p className="card-text"><span>Ciudad:</span> Cota</p>
                      <p className="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p className="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lactea"><i class="bi bi-plus-circle"></i>   Registro</a>
                        <Link to="/historial" className="btn btn-eliminar"><i class="bi bi-clock-history"></i>   Historial</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card2">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">Dulcinea</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p className="card-text"><span>Ciudad:</span> Cota</p>
                      <p className="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p className="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lactea"><i class="bi bi-plus-circle"></i>   Registro</a>
                        <Link to="/historial" className="btn btn-eliminar"><i class="bi bi-clock-history"></i>   Historial</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card2">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">Dulcinea</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p className="card-text"><span>Ciudad:</span> Cota</p>
                      <p className="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p className="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lactea"><i class="bi bi-plus-circle"></i>   Registro</a>
                        <Link to="/historial" className="btn btn-eliminar"><i class="bi bi-clock-history"></i>   Historial</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card2">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">Dulcinea</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p className="card-text"><span>Ciudad:</span> Cota</p>
                      <p className="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p className="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lactea"><i class="bi bi-plus-circle"></i>   Registro</a>
                        <Link to="/historial" className="btn btn-eliminar"><i class="bi bi-clock-history"></i>   Historial</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card2">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">Dulcinea</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p className="card-text"><span>Ciudad:</span> Cota</p>
                      <p className="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p classNamen="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lactea"><i class="bi bi-plus-circle"></i>   Registro</a>
                        <Link to="/historial" className="btn btn-eliminar"><i class="bi bi-clock-history"></i>   Historial</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card2">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">Dulcinea</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> Pepito Pedro Perez Perez</p>
                      <p className="card-text"><span>Ciudad:</span> Cota</p>
                      <p className="card-text"><span>Dirección:</span> Km 7 vía variante Cota</p>
                      <p className="card-text"><span>Datos de contacto:</span> 031-2333333 301 3333333</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lactea"><i class="bi bi-plus-circle"></i>   Registro</a>
                        <Link to="/historial" className="btn btn-eliminar"><i class="bi bi-clock-history"></i>   Historial</Link>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4 imgproduccion">
              
            </div>
          </div> 
            <h3></h3>
          <Mproduccion />
        </div>
    );
  }
  
  export default Produccion;