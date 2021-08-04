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


  // funcion que maneja el evento dentro del formulario//
  const handleSubmit= (e) =>{
    e.preventDefault ();
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
                          name="granja"
                          onChange={handleInputChange}/* cambio de estado del input trae la funcion*/
                          value={values.granja} /*agrega el value al input para que  refleje el estado inicial despues de ingresar un dato*/                     />
                  </div>
                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="nombrep" 
                          placeholder="Nombre del propietario:"
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
                          value={values.direccion}
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="number" 
                          className="form-control forminput" 
                          id="tel" 
                          placeholder="Teléfono:"
                          name="telefono"
                          onChange={handleInputChange}
                          value={values.telefono}
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="number" 
                          className="form-control forminput" 
                          id="celu" placeholder="Número de celular:"
                          name="celular"
                          onChange={handleInputChange}
                          value={values.celular}
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="email" 
                          className="form-control forminput" 
                          id="correo" 
                          placeholder="Correo electrónico:"
                          name="correo"
                          onChange={handleInputChange}
                          value={values.correo}
                    />
                  </div>
                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="ruta" placeholder="Ruta de recolección:"
                          name="ruta"
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
                          onClick={()=>{alert('Información guardada correctamente')}}>{props.currentId === '' ? 'Enviar': 'Modificar'}</button>
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