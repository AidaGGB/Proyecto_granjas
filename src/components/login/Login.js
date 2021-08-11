import './Login.css';
import login from './login.png';
import React,{useState} from "react";
import {useFormik} from "formik";
import  * as Yup from "yup";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function Login () {

  let form=document.querySelector("#form1")
  let fedb1=document.querySelector("#campoUsuario .feedback")
  let fedb2=document.querySelector("#campoContrasena .feedback")

  let usuarioc=/aimaga/
  let contrasenac=/123456/
  
  const handleSubmit= (e) => {
    e.preventDefault ();
      
      const usuario=document.getElementById("usuario").value
      const contrasena=document.getElementById("contrasena").value

      if (usuario===usuarioc){
      form.usuario.setAttribute("class","success")
      fedb1.textContent=""
      fedb1.style.setProperty("visibility","hidden")
      fedb1.style.setProperty("opacity","0")
    }
    else{
      form.usuario.setAttribute("class","error")	
      fedb1.textContent="Usuario invalido"
      fedb1.style.setProperty("visibility","visible")
      fedb1.style.setProperty("opacity","1")
      }   
}

     
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
                <form className="form1" id="form1" onSubmit={(e)=> handleSubmit}>
                <div id="campoUsuario">
                  <input 
                        type="text" 
                        id="usuario" 
                        className="form-control" 
                        name="user" 
                        required="required" 
                        placeholder=" Usuario"
                  />
                   <div class="feedback"></div>
                </div>
                <div id="campoContrasena">
                  <input type="text" 
                        id="contrasena" 
                        className="form-control" 
                        name="contrasena" 
                        required="required" 
                        placeholder=" Contraseña"
                  />
                   <div class="feedback"></div>
                </div>

                  <div className="recordar">
                    <div>
                      <input type="checkbox"  required="required" />   Recordar mis datos
                    </div>
                    <div>
                      <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div>
                      <Link to="./index"><input type="submit" value="Iniciar Sesión" className="sesion"/></Link>
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

  //let form=document.querySelector("#form1")
  //let fedb1=document.querySelector("#campoUsuario .feedback")
  //let fedb2=document.querySelector("#campoContrasena .feedback")

  //let usuarioc=/aimaga/
  //let contrasenac=/123456/

  /*form.usuario.addEventListener("input", e =>{  
    if (usuarioc.test(e.target.value)) {
      form.usuario.setAttribute("class","success")
      fedb1.textContent=""
      fedb1.style.setProperty("visibility","hidden")
      fedb1.style.setProperty("opacity","0")
    }
    else{
      form.usuario.setAttribute("class","error")	
      fedb1.textContent="Solo se admiten letras"
      fedb1.style.setProperty("visibility","visible")
      fedb1.style.setProperty("opacity","1")
      }   
})
}*/


 

  /*const formik = useFormik({
    initialValues:{
      user: "",
      constrasena:"",
    },

    validationSchema:Yup.object({
      user: Yup.string()
              .user("Usuario no valido")
              .required("Campo obligatorio"),

      constrasena: Yup.string()
              .contrasena("Contraseña no valido")
              .required("Campo obligatorio"),
    }),

    onSubmit:(FormData) =>{
      console.log(FormData);
    },

  });*/
  

   