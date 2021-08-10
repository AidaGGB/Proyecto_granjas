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
    if (currentIdP=== "") {
     await db.collection('registro').doc().set(regobject);
     console.log("new task added")
    }
    else{
      await db.collection('registro').doc(currentIdP).update(regobject);
    }
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
                  
                  <div className="card cardgranjas" >
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">{props.pnom}</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> {props.pnombre} {props.papellidos}</p>
                      <p className="card-text"><span>Ciudad:</span> {props.pciudad}</p>
                      <p className="card-text"><span>Dirección:</span> {props.pdireccion}</p>
                      <p className="card-text"><span>Datos de contacto:</span> {props.ptel}<br/>{props.pcel}</p>
                      <p className="card-text"><span>Correo electrónico:</span> {props.pmail}</p>
                      <p className="card-text"><span>Ruta:</span> {props.pruta}</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${props.pnom.split(' ').join('')}`}><i class="bi bi-plus-circle"></i>   Registro</a>
                        <Link to="/historial" className="btn btn-eliminar"><i class="bi bi-clock-history"></i>   Historial</Link>
                      </div>
                    </div>
                  </div>
                       
          <Mproduccion Mid={props.pnom} pid={props.pid} {...{addOrEditP, currentIdP, registro}}/>
      </div> /*se definio un props para colocarle al modal como id el nombre de la granja, y que lance 1 modal por cada granja con su id*/
    );
  }
  
  export default Produccion;