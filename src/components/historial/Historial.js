import './Historial.css';
import Granja from './granjaperfil.jpeg';
import Mgranjas from '../granjas/Mgranjas';
import Mfiltrar from './Mfiltrar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Historial () {
    return (
      <div>
        <div className="container-fluid overflow-hidden">
		      <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 titleh">
                  <h1>HISTORIAL</h1>
                </div>
			    </div> 
          <div className="row encabezadoh">
                <div className="col-sm-12 col-md-12 col-lg-2">
                  <img src={Granja}/>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-2">
                    <h2>DULCINEA</h2>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8 fechas">
                    <input type="date" className="form-control3" id="fecha1"/>
                    <input type="date" className="form-control4" id="fecha2"/>
                    <a href="#" className="filtrar" data-bs-toggle="modal" data-bs-target="#filtroh">Filtrar</a>
                </div>
          </div>
          <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 table-responsive">
                  <table className="tablah">
                  <tr>
                    <th>Fecha</th>
                    <th>Cantidad/litros</th>
                    <th colspan="2">Acciones</th>
                  </tr>
                  <tr>
                    <td>dd/mm/aa</td>
                    <td>000000L</td>
                    <td><button className="editarh"><i className="fas fa-pen"></i></button></td>
                    <td><button className="eliminarh" data-bs-toggle="modal" data-bs-target="#eliminar"><i className="fas fa-trash-alt"></i></button></td>
                  </tr>
                  <tr>
                    <td>dd/mm/aa</td>
                    <td>000000L</td>
                    <td><button className="editarh"><i className="fas fa-pen"></i></button></td>
                    <td><button className="eliminarh" data-bs-toggle="modal" data-bs-target="#eliminar"><i className="fas fa-trash-alt"></i></button></td>
                  </tr>
                  <tr>
                    <td>dd/mm/aa</td>
                    <td>000000L</td>
                    <td><button className="editarh"><i className="fas fa-pen"></i></button></td>
                    <td><button className="eliminarh" data-bs-toggle="modal" data-bs-target="#eliminar"><i className="fas fa-trash-alt"></i></button></td>
                  </tr>
                  <tr>
                    <td>dd/mm/aa</td>
                    <td>000000L</td>
                    <td><button className="editarh"><i className="fas fa-pen"></i></button></td>
                    <td><button className="eliminarh" data-bs-toggle="modal" data-bs-target="#eliminar"><i className="fas fa-trash-alt"></i></button></td>
                  </tr>
                  <tr>
                    <td>dd/mm/aa</td>
                    <td>000000L</td>
                    <td><button className="editarh"><i className="fas fa-pen"></i></button></td>
                    <td><button className="eliminarh" data-bs-toggle="modal" data-bs-target="#eliminar"><i className="fas fa-trash-alt"></i></button></td>
                  </tr>
                  </table>
                </div>
          </div>
        <Mgranjas/>
        <Mfiltrar/>
        </div>
        
      </div>
    );
  }
  
  export default Historial;