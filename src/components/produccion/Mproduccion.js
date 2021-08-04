import './Produccion.css';
import React,{useState, useEffect} from "react";
import { db2 } from '../../firebase2';


function Mproduccion (props) {

   //funcion que trae lo valores iniciales //
   const initialStateValuesP={
    fecha:'',
    registro:'',
    };

  //Funcion que coloca los valores iniciales (use state) en el array
  const [values, setValues]= useState(initialStateValuesP);
  
  //funcion que c/vez que se escribe actualiza el estado, maneja el cambio del input//
  const handleInputChangeP= (e) =>{
      const {name,value}= e.target;
      setValues({...values, [name]:value})//guarda lo que se esta escribiendo en el estado//
  };


  // funcion que maneja el evento dentro del formulario//
  const handleSubmitP= (e) =>{
    e.preventDefault ();
    props.addOrEditLinkP(values);//con el props trae la funcion que se ejecuta en el inicios//
    setValues({...initialStateValuesP})//limpia el formulario, trae los valores iniciales despues de ingresar informacion//
  };

  const getLinkByIdP = async (id) => {
    const doc = await db2.collection('registros').doc(id).get();
    console.log(doc.data ())
    
  };

   
    return (
      <div className="modal" tabindex={-1} id="lactea" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header headerp">
              <h5 className="modal-title">Registro diario de producción de leche</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bodyp">
              <form className="row g-3" onSubmit={handleSubmitP}>
                <div className="col-md-6 mb-3 modalp">
                  <label for="fecha" class="col-sm-2 col-form-label">Fecha:</label>
                  <input type="date" 
                        className="form-control2" 
                        id="fecha"
                        onChange={handleInputChangeP}/* cambio de estado del input trae la funcion*/
                        value={values.fecha} /*agrega el value al input para que  refleje el estado inicial despues de ingresar un dato*/                     
                  />
                </div>
                <div className="col-md-6 mb-3 modalp">
                  <label for="registro" className="col-sm-2 col-form-label2">Registro:</label>
                  <input type="text" 
                        className="form-control2" 
                        id="registro" 
                        placeholder="Cantidad/litros"
                        onChange={handleInputChangeP}/* cambio de estado del input trae la funcion*/
                        value={values.registro} /*agrega el value al input para que  refleje el estado inicial despues de ingresar un dato*/                    
                  />
                </div>
              </form>    
            </div>
            <div className="modal-footer footerp">
              <button type="submit" className="btn-reg" onClick={()=>{alert('Información guardada correctamente')}}>Guardar</button>
              <button type="submit" className="btn-reg2"  data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Mproduccion;