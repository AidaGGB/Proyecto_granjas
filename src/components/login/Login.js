import './Login.css';
import login from './login.png';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Login () {
    return (
      <div className="container-fluid">
		    <div className="row">
          <div className="imglogin col-sm-12 col-md-12 col-lg-6">
            <img src={login} className="img-fluid"/>
          </div>
          <div className="card formulario col-sm-12 col-md-12 col-lg-6">
            <Link to="./" href="#"><i className="fas fa-times-circle"></i></Link>
              <div className="card-body">
                <h1>SISTEMA REGRAN</h1>
                <h2>BIENVENIDOS</h2>
            
                <p>Ingresa tu  usuario y contraseña para poder realizar la gestion de las granjas en el sistema REGRAN.</p>
                <form className="form1" id="form1"  >
                  <input type="text" id="usuario" className="form-control" name="usuario" size="50" maxlength="50" required="required" placeholder=" Usuario"/>
                  <input type="text" id="contraseña" className="form-control" name="contraseña" size="50" maxlength="50" required="required" placeholder=" Contraseña"/>
                  <div className="recordar">
                    <div>
                      <input type="checkbox"  required="required" />   Recordar mis datos
                    </div>
                    <div>
                      <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div>
                      <Link to="/index"><input type="submit" value="Iniciar Sesión" className="sesion"/></Link>
                    </div>
                  </div>
                </form>
              </div>
          </div>
			  </div>
			</div>
        
    
    );
  }
  
  export default Login;