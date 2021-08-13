import './Login.css';
import loginimg from './login.png';
import React,{useState} from "react";
import {Link} from "react-router-dom";


function Login () {

  let usuarioc="aimaga"
  let contrasenac="123456"

  const [login, setLogin]= useState({
    usuario:"",
    contrasena:"",
  })
  
  const handleSubmit= (e) => {
    e.preventDefault ();
    console.log(login)
    if (login.usuario==="" && login.contrasena==="") {
      alert("No se ha completado los campos")
    }
    else if (login.usuario===usuarioc && login.contrasena===contrasenac){
      window.location.replace('/index')
    }
    else{
      alert("Datos ingresados incorrectos")
    }
  }

  const handleChange=(e) =>{
    setLogin({
      ...login,
      [e.target.name]:e.target.value
    })
  }

    return (
      <div className="container-fluid">
		    <div className="row">
          <div className="imglogin col-sm-12 col-md-12 col-lg-6">
            <img src={loginimg} className="img-fluid" alt="" />
          </div>
          <div className="card formulario col-sm-12 col-md-12 col-lg-6">
            <Link to="./"><i className="fas fa-times-circle"></i></Link>
              <div className="card-body">
                <h1>SISTEMA REGRAN</h1>
                <h2>BIENVENIDOS</h2>
            
                <p>Ingresa tu  usuario y contraseña para poder realizar la gestion de las granjas en el sistema REGRAN.</p>
                <form className="form1" id="form1" onSubmit={handleSubmit}>
                
                  <input 
                        type="text" 
                        id="usuario" 
                        className="form-control" 
                        name="usuario" 
                        required="required" 
                        placeholder=" Usuario"
                        value={login.usuario}
                        onChange={handleChange}
                  />

                  <input type="password" 
                        id="contrasena" 
                        className="form-control" 
                        name="contrasena" 
                        required="required" 
                        placeholder=" Contraseña"
                        value={login.constrasena}
                        onChange={handleChange}
                  />

                    <div>
                      <input type="checkbox"/>   Recordar mis datos
                    </div>
                    <div>
                      <Link to="">¿Olvidaste tu contraseña?</Link>
                    </div>
                    <div>
                     <button type="submit"  className="sesion">Iniciar Sesion</button>
                    </div>
                </form>
              </div>
          </div>
			  </div>
			</div>
    );
  }
  
  export default Login;

  
  

   