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


function Produccion () {

  const [registro,setRegistro] = useState([])

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
      <div className="container-fluid overflow-hidden">
          <div className="row granjas">
                  <div className=" col-sm-12 col-md-12 col-lg-8" >
                    <h1>PRODUCCIÓN LÁCTEA</h1>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4" >
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="¿Que granja estas buscando?"   aria-label="Amount (to the nearest dollar)"/>
                      <span className="input-group-text"><i className="fas fa-search"></i></span>
                    </div>
                  </div>
                  
          </div>

          
          <div className="row cajasg">
            <div className="col-sm-12 col-md-12 col-lg-8 ">
              <div className="row ">
              {links.map (link => (
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card cardgranjas" key={link.id }>
                    <div className="card-body infogranjas">
                      <img src={perfil}/>
                      <h6 className="card-title">{link.granja}</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> {link.nombrep}{link.apellidop}</p>
                      <p className="card-text"><span>Ciudad:</span> {link.ciudad}</p>
                      <p className="card-text"><span>Dirección:</span> {link.direccion}</p>
                      <p className="card-text"><span>Datos de contacto:</span> {link.telefono} <br/> {link.celular}</p>
                      <p className="card-text"><span>Correo electrónico:</span> {link.correo}</p>
                      <p className="card-text"><span>Ruta:</span> {link.ruta}</p>
                      <div className="botoncard">
                        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lactea"><i class="bi bi-plus-circle"></i>   Registro</a>
                        <Link to="/historial" className="btn btn-eliminar"><i class="bi bi-clock-history"></i>   Historial</Link>
                      </div>
                    </div>
                  </div>
                
                </div>
               ))}
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 imgproduccion">
              
            </div>
          </div> 
          <Mproduccion addOrEditP={addOrEditP} />
        </div>
    );
  }
  
  export default Produccion;