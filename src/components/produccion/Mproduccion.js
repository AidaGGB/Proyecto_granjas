import './Produccion.css';
import React,{useState, useEffect} from "react";
import { db } from '../../firebase';

function Mproduccion (props) {

  const initialStateValuesP={
    fecha:'',
    registro:'',
    idgranja:'',
    granja:'',
   };

  //Funcion que coloca los valores iniciales (use state) en el array
  const [valuesp,setValuesP]=useState(initialStateValuesP);

  //funcion que c/vez que se escribe actualiza el estado, maneja el cambio del input//
  const handleInputChangeP= (e) =>{
    const {name,value}= e.target;
    setValuesP({...valuesp, [name]:value})//guarda lo que se esta escribiendo en el estado//
};


  const handleSubmitP= async (e) =>{
    e.preventDefault ();
    await props.addOrEditP(valuesp)
    .then(respuesta=>{
      setValuesP(initialStateValuesP)
      console.log(valuesp)
    })
    
  };

  const getLinkByIdP= async (id)=>{
    const doc= await db.collection('registro').doc(id).get();
    console.log(doc.data())
    setValuesP(doc.data())
  }
  

  useEffect (() =>{
    if (props.currentIdP === ''){
      setValuesP({...initialStateValuesP});
    }
    else{
      getLinkByIdP(props.currentIdP)
    }
  },[props.currentIdP]);
  
    return (
      <div className="modal" tabindex={-1} id={props.Mid?.split(' ').join('') || "plactea"} >{/* el id trae el nombrede la granja x 1/2 de un props, ene l id se esta uniendo el nombre de la granja para que quede 1 solo string el siplit toma cada palabra del nombre y lo coloca en e1 array, el join une todod lo del array y lo deja como un string*/}
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header headerp">
              <h5 className="modal-title">Registro diario de producción de leche</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bodyp">
              
              <form className="row g-3" onSubmit={handleSubmitP} >
                <div className="col-md-6 mb-3 modalp">
                  <input type="hidden" 
                        id="idgranja"
                        name="idgranja"
                        onChange={handleInputChangeP}
                        value={valuesp.idgranja=props.pid} 
                  />
                  <input type="hidden" 
                        id="granja"
                        name="granja"
                        onChange={handleInputChangeP}
                        value={valuesp.granja=props.Mid} 
                  />
                <label for="fecha" className="col-sm-2 col-form-label">Fecha:</label>
                  <input type="date" 
                        className="form-control2" 
                        id="fecha"
                        name="fecha"
                        onChange={handleInputChangeP}
                        value={valuesp.fecha}
                  />
                </div>
                <div className="col-md-6 mb-3 modalp">
                  <label for="registro" className="col-sm-2 col-form-label2">Registro:</label>
                  <input type="text" 
                        className="form-control2" 
                        id="registro" 
                        placeholder="Cantidad/litros"
                        name="registro"
                        onChange={handleInputChangeP}
                        value={valuesp.registro}                         
                  />
                </div>
                <div className="modal-footer footerp">
                  <button type="submit" className="btn-reg" >Guardar</button>
                  <button className="btn-reg2"  data-bs-dismiss="modal">Cerrar</button>
                </div>
              </form>    
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
  export default Mproduccion;