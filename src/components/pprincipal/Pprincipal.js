import './Pprincipal.css';
import Index from './index.png';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Pprincipal () {
    return (
      <div>
        <div className="container-fluid overflow-hidden">
		    <div className="row">
                <div className="titulo col-12">
                  <h1>SISTEMA REGRAN</h1>
                </div>
                <div className="row cajas">
                  <div className="card col-sm-12 col-md-12 col-lg-6">
                    <div className="card-body">
                        <p className="card-text">Alquería es una de las empresas lácteas más grandes de Colombia, fue fundada en 1959. La empresa se abastece de materias primas de proveedores nacionales, generalmente insumos de diferentes regiones del país. Su departamento de compras se encarga de realizar las compras necesarias en el momento oportuno, con la cantidad y calidad requeridas, y al precio adecuado para las personas.<br /> <br />El sistema de registro de granjas (REGRAN), nos permite conocer los datos de la granja proveedoras de leche en nuestra organización y su producción diaria.</p>
                    </div>
                  </div>
                  <div className="card imgindex col-sm-12 col-md-12 col-lg-6">
                  
                  </div>
                </div>
			  </div>    
        </div>
      </div>
    );
  }
  
  export default Pprincipal;