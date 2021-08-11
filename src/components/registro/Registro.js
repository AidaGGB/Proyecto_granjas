import './Registro.css';
import { db } from '../../firebase';
import React,{useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";




function Registro (props) {
  
  //funcion que trae lo valores iniciales //
  const initialStateValues={
    granja:'',
    nombrep:'',
    apellidosp:'',
    ciudad:'',
    direccion:'',
    telefono:'',
    celular:'',
    correo:'',
    ruta:'',

   };

  //Funcion que coloca los valores iniciales (use state) en el array
  const [values, setValues]= useState(initialStateValues);
  
  //funcion que c/vez que se escribe actualiza el estado, maneja el cambio del input//
  const handleInputChange= (e) =>{
      const {name,value}= e.target;
      setValues({...values, [name]:value})//guarda lo que se esta escribiendo en el estado//
  };

  const Letras = str =>{
    return  /^[a-zA-Z ]{2,30}$/.test(str);
  }git 

  const Direccion = str =>{
    return  /^[A-Za-z0-9\s#-]+$/.test(str);
  }

  const Numeros = str =>{
    return  /^\d{7,14}$/.test(str);
  }

  const Email = str =>{
    return  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str);
  }

  const Ruta = str =>{
    return  /^[a-zA-Z0-9]{1,3}$/.test(str);
  }
  

  // funcion que maneja el evento dentro del formulario//
  const handleSubmit= (e) =>{
    e.preventDefault ();
    if(!Letras(values.granja)){
      window.alert("Datos invalidos")
    }
    else if (!Letras(values.nombrep)) {
      window.alert("Datos invalidos")
    }
    else if (!Letras(values.apellidosp)) {
      window.alert("Datos invalidos")
    }
    else if (!Letras(values.ciudad)) {
      window.alert("Datos invalidos")
    }
    else if (!Direccion(values.direccion)) {
      window.alert("Datos invalidos")
    }
    else if (!Numeros(values.telefono)) {
      window.alert("Datos invalidos")
    }
    else if (!Numeros(values.celular)) {
      window.alert("Datos invalidos")
    }
    else if (!Email(values.correo)) {
      window.alert("Datos invalidos")
    }
    else if (!Ruta(values.ruta)) {
      window.alert("Datos invalidos")
    }
    else{
       alert('Información guardada correctamente')
    }
    props.addOrEditLink(values);//con el props trae la funcion que se ejecuta en el inicios//
    setValues({...initialStateValues})//limpia el formulario, trae los valores iniciales despues de ingresar informacion//
  };

  const getLinkById = async (id) => {
    const doc = await db.collection('links').doc(id).get();
    console.log(doc.data ())
    setValues ({...doc.data()})
  };

  
  useEffect (() =>{
    if (props.currentId === ''){
      setValues({...initialStateValues});
    }
    else {
    getLinkById(props.currentId);
    }
  }, [props.currentId]);

  //const name= [/AASDRFGHJK]
   //if (name.test (value.granja)=== false){
   // window.alert(ingrese un valor valido)
  //}

    return (
      <div>
        <div className="container-fluid overflow-hidden registro">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12" >
            <div className="card3">
              <Link to="/granjas" href="#"><i className="fas fa-times-circle"></i></Link>
            <div className="card-body ">
                <div className="titleform">
                  <h3 className="card-title">REGISTRARSE</h3>
                </div>
                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-12">
                    <input type="text" 
                          className="form-control forminput" 
                          id="granja" 
                          placeholder="Nombre de la granja:"
                          required="required"
                          pattern=" /^(?!.* (?: |$))[A-Z][a-z ]{1,40}$/"
                          name="granja"
                          onChange={handleInputChange}/* cambio de estado del input trae la funcion*/
                          value={values.granja} /*agrega el value al input para que  refleje el estado inicial despues de ingresar un dato*/                     />
                  </div>
                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="nombrep" 
                          placeholder="Nombre del propietario:"
                          required="required"
                          pattern=" /^[a-zA-Z ]{2,30}$/"
                          name="nombrep"
                          onChange={handleInputChange}
                          value={values.nombrep}
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="apellidosp" 
                          placeholder="Apellidos del propietario:"
                          required="required"
                          pattern=" /^[a-zA-Z ]{2,30}$/" 
                          name="apellidosp"
                          onChange={handleInputChange}
                          value={values.apellidosp}
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="ciudad" placeholder="Ciudad:"
                          name="ciudad"
                          required="required"
                          pattern=" /^[a-zA-Z ]{2,30}$/"
                          onChange={handleInputChange}
                          value={values.ciudad}
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="direccion" placeholder="Dirección:"
                          name="direccion"
                          onChange={handleInputChange}
                          required="required"
                          pattern="/^[A-Za-z0-9\s#-]+$/"
                          value={values.direccion}
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="tel" 
                          placeholder="Teléfono:"
                          name="telefono"
                          required="required"
                          pattern="/^\d{7,14}$/"
                          onChange={handleInputChange}
                          value={values.telefono}
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="celu" placeholder="Número de celular:"
                          name="celular"
                          required="required"
                          pattern="/^\d{7,14}$/"
                          onChange={handleInputChange}
                          value={values.celular}
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="email" 
                          className="form-control forminput" 
                          id="correo" 
                          placeholder="Correo electrónico:"
                          required="required"
                          name="correo"
                          pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                          onChange={handleInputChange}
                          value={values.correo}
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="ruta" 
                          placeholder="Ruta de recolección:"
                          name="ruta"
                          required="required"
                          pattern="/^[a-zA-Z0-9]{1,3}$/"
                          onChange={handleInputChange}
                          value={values.ruta}
                    />
                  </div>
                                
                  <div className="col-6">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck"/>
                      <label className="form-check-label" for="gridCheck">
                        Acepto términos y condiciones
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck"/>
                      <label className="form-check-label" for="gridCheck">
                        Autorizo tratamiento de datos personales
                      </label>
                    </div>
                  </div>
                  <div className="botonreg">
                    <button type="submit" 
                          className="btn-reg" 
                          > Enviar</button>  {/*{props.currentId === '' ? 'Enviar': 'Modificar'}*/}
                     <Link to="/granjas"><button type="submit" className="btn-reg2">Cerrar</button></Link>
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
  
  export default Registro;