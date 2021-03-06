import './Registro.css';
import { db } from '../../firebase';
import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";


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
                          required="required"
                          name="granja"
                          pattern="^[a-zA-Z ]{2,30}$"
                          onChange={handleInputChange}/* cambio de estado del input trae la funcion*/
                          value={values.granja}/*agrega el value al input para que  refleje el estado inicial despues de ingresar un dato*/                    
                    />
                  </div>

                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="nombrep" 
                          placeholder="Nombre del propietario:"
                          required="required"
                          pattern="^[a-zA-Z ]{2,30}$"
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
                          pattern="^[a-zA-Z ]{2,30}$" 
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
                          pattern="^[a-zA-Z ]{2,30}$"
                          onChange={handleInputChange}
                          value={values.ciudad}
                    />
                  </div>

                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="direccion" placeholder="Direcci??n:"
                          name="direccion"
                          onChange={handleInputChange}
                          required="required"
                          pattern="^[A-Za-z0-9\s#-]+$"
                          value={values.direccion}
                    />
                  </div>

                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="tel" 
                          placeholder="Tel??fono:"
                          name="telefono"
                          required="required"
                          pattern="^\d{7,14}$"
                          onChange={handleInputChange}
                          value={values.telefono}
                    />
                  </div>

                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="celu" placeholder="N??mero de celular:"
                          name="celular"
                          required="required"
                          pattern="^\d{7,14}$"
                          onChange={handleInputChange}
                          value={values.celular}
                    />
                  </div>

                  <div className="col-md-6">
                    <input type="email" 
                          className="form-control forminput" 
                          id="correo" 
                          placeholder="Correo electr??nico:"
                          required="required"
                          name="correo"
                          pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                          onChange={handleInputChange}
                          value={values.correo}
                    />
                  </div>

                  <div className="col-md-6">
                    <input type="text" 
                          className="form-control forminput" 
                          id="ruta" 
                          placeholder="Ruta de recolecci??n:"
                          name="ruta"
                          required="required"
                          pattern="^[a-zA-Z0-9]{1,3}$"
                          onChange={handleInputChange}
                          value={values.ruta}
                    />
                  </div>
                                
                  <div className="col-6">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck"/>
                      <label className="form-check-label" for="gridCheck">
                        Acepto t??rminos y condiciones
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

                  {false &&  <div className="mensajerror">
                  <p><b>Error:</b> Por favor diligenciar el formulario correctamente</p>
                  </div>}

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

  