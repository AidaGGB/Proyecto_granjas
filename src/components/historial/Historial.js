import './Historial.css';
import Mproduccion from '../produccion/Mproduccion';
import {db} from '../../firebase';
import React, {useEffect, useState} from "react";
import Swal from "sweetalert2";
import meliminacion from "../granjas/meliminacion.jpeg";
import {Link} from "react-router-dom";

function Historial (props) {

  const [registro,setRegistro] = useState([])
  const [currentIdP, setCurrentIdP] = useState ('');


  const onDeleteReg = id =>{
    Swal.fire({
        showCancelButton: true,
        title: '<span style="color:#fff">¿Desea eliminar esta granja?</span>',
        confirmButtonColor: '#004296',
        cancelButtonColor: '#CB262A',
        confirmButtonText: 'Sí, Eliminelo!',
        cancelButtonText: 'No, Cancelar!',
        buttonsStyling: false,
        showCloseButton: true,
        background: `url(${meliminacion})`,

        customClass:{
        popup: 'contentgranjas',
        title: 'bodygranjas',
        background: 'contentgranjas',
        confirmButton: 'btn-m',
        cancelButton: 'btn-m2',
      }

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
        'Registro Eliminado',
        '',
        'success',
        db.collection('registro').doc(id).delete()
        )
      }
    })
  }

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

   const Buscar = async (e) =>{ 
    db.collection ('registro').where("granja", "==", e.target.value).onSnapshot((querySnapshot)=>{
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

        <div className="row encabezadoh" >
          <div className="col-sm-12 col-md-12 col-lg-5 " >
            <h2>Granja</h2>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3" >
            <div className="input-group mb-2">
              <input type="text" 
              className="form-control" 
              id="busqueda" 
              name="busqueda" 
              placeholder="¿Que granja estas buscando?"   
              aria-label="Amount (to the nearest dollar)"
              onChange={Buscar}
              />
             <span className="input-group-text"><i className="fas fa-search"></i></span>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 fechas">
            <input type="date" className="form-control3" id="fecha1"/>
            <input type="date" className="form-control4" id="fecha2"/>
            <Link to="" className="filtrar" data-bs-toggle="modal" data-bs-target="#filtroh">Filtrar</Link>
          </div>
        
        </div>

        <div className="row">
          
          <div className="col-sm-12 col-md-12 col-lg-12 table-responsive">
            <table className="tablah">
              <tr>
                <th>Fecha</th>
                <th>Cantidad/litros</th>
                <th>Granja</th>
                <th colspan="2">Acciones</th>
              </tr>

              {registro.map(reg => (
              <tr key={reg.id}>
                <td>{reg.fecha}</td>
                <td>{reg.registro}</td> 
                <td>{reg.granja}</td>
                
                <td colspan="2">
                    <button className="editarh"
                          data-bs-toggle="modal"
                          data-bs-target="#plactea"
                          onClick={() => (setCurrentIdP(reg.id))}>
                          <i className="fas fa-pen"></i>
                    </button>
                    <button className="eliminarh" 
                            data-bs-toggle="modal" 
                            data-bs-target={`#${reg.id}`}
                          onClick={() =>(onDeleteReg(reg.id))}>
                          <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
              </tr>
                ))}
            </table>
          </div>
        </div>
       
        <Mproduccion {...{currentIdP}}/> {/* llamar nuevamente el modal pra que cuando sede click en editar se lance el modal y poder modificar los datos, se le paso al modal el currentid y el props que trae el id del modal segun el registro*/}
      </div>
        
    );
  }
  
  export default Historial;