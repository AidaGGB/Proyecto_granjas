import './Historial.css';
import Granja from './granjaperfil.jpeg';
import Mfiltrar from './Mfiltrar';
import {db} from '../../firebase';
import React, {useEffect, useState} from "react";


function Historial () {

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

    return (
      <div className="container-fluid overflow-hidden">
		    <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 titleh">
            <h1>HISTORIAL</h1>
          </div>
			  </div> 

        <div className="row encabezadoh">
          <div className="col-sm-12 col-md-12 col-lg-2">
            <img src={Granja}/>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-2">
            <h2>DULCINEA</h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-8 fechas">
            <input type="date" className="form-control3" id="fecha1"/>
            <input type="date" className="form-control4" id="fecha2"/>
            <a href="#" className="filtrar" data-bs-toggle="modal" data-bs-target="#filtroh">Filtrar</a>
          </div>
        </div>

        <div className="row">
          {registro.map(reg => (
          <div className="col-sm-12 col-md-12 col-lg-12 table-responsive">
            <table className="tablah">
              <tr>
                <th>Fecha</th>
                <th>Cantidad/litros</th>
                <th colspan="2">Acciones</th>
              </tr>

              <tr>
                <td>{reg.fecha}</td>
                <td>{reg.registro}</td>
                <td colspan="2"><button className="editarh"><i className="fas fa-pen"></i></button>
                    <button className="eliminarh" data-bs-toggle="modal" data-bs-target="#eliminar"><i className="fas fa-trash-alt"></i></button>
                </td>
              </tr>
            </table>
          </div>
          ))}
          
        </div>
      
        <Mfiltrar/>
      </div>
        
    );
  }
  
  export default Historial;