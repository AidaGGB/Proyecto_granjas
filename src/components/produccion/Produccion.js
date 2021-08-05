import './Produccion.css';
import perfil from './granjaperfil.jpeg';
import Mproduccion from './Mproduccion';
import {db} from '../../firebase';

import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Produccion (props) {

  const [registro,setRegistro] = useState([])
  const [currentIdP, setCurrentIdP] = useState ('');
  

  const addOrEditP = async (regobject) => {
    await db.collection('registro').doc().set(regobject);
    console.log("new task added")
  };

  const getLinksP = async () =>{
    db.collection ('registro').onSnapshot((querySnapshot)=>{
      const docsp = [];
    querySnapshot.forEach ((doc) =>{
       console.log(doc.data())
       console.log(doc.id)
       docsp.push({...doc.data(), id:doc.id});
       });
      setRegistro(docsp);
     });
 };
 
   useEffect (() => {
    getLinksP();
  }, []);

  const [links,setlinks] = useState([])
  
  const getLinks = async () =>{
     db.collection ('links').onSnapshot((querySnapshot)=>{
       const docs = [];
      querySnapshot.forEach ((doc) =>{
        docs.push({...doc.data(), id:doc.id});
        });
        setlinks(docs);
      });
  };

   useEffect(() =>{
      getLinks();
   }, []);


    return (
      <div>
                  
                  <div className="card cardgranjas">
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">{props.pnom}</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span></p>
                      <p className="card-text"><span>Ciudad:</span></p>
                      <p className="card-text"><span>Dirección:</span></p>
                      <p className="card-text"><span>Datos de contacto:</span> <br/></p>
                      <p className="card-text"><span>Correo electrónico:</span></p>
                      <p className="card-text"><span>Ruta:</span></p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lactea"><i class="bi bi-plus-circle"></i>   Registro</a>
                        <Link to="/historial" className="btn btn-eliminar"><i class="bi bi-clock-history"></i>   Historial</Link>
                      </div>
                    </div>
                  </div>
                         
          <Mproduccion pid={props.pid} {...{addOrEditP, currentIdP, registro}}/>
      </div>  
    );
  }
  
  export default Produccion;