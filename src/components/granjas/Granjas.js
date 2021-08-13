import './Granjas.css';
import perfil from './granjaperfil.jpeg';
import {db} from '../../firebase';
import React, {useEffect, useState} from "react";
import Swal from "sweetalert2";
import meliminacion from "./meliminacion.jpeg";
import {Link} from "react-router-dom";


function Granjas (props) {

  const [links,setlinks] = useState([])

    //funcion que guarda y envia los datos a firebase, se llama con props en la funcion del componente//
  /*const addOrEditLink= async (linkObject)=>{// async funcion que trae el awwait para guardar los datos mientras se ejecuta otro codigo//
    await db.collection('links').doc().set(linkObject);//desde la bas de  datos de firebase crea una coleccion de nombre link que se guanda en un documento unico que trae desde link object//
  };*/

   const onDeleteLink = id =>{
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
        'Granja Eliminada',
        '',
        'success',
        db.collection('links').doc(id).delete()
        )
      }
    })
  }

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

  const Buscarg = async (e) =>{ 
    db.collection ('links').where("granja", "==", e.target.value).onSnapshot((querySnapshot)=>{
      const docsp = [];
    querySnapshot.forEach ((doc) =>{
       console.log(doc.data())
       console.log(doc.id)
       docsp.push({...doc.data(), id:doc.id});
       });
      setlinks(docsp);
     });
 };

     return (
      
        <div className="container-fluid overflow-hidden">
          <div className="row granjas">
                  <div className=" col-sm-12 col-md-12 col-lg-7" >
                    <h1>COMUNIDAD GRANJAS</h1>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-3" >
                    <div className="input-group mb-3">
                      <input type="text" 
                      id="buscarg"
                      name="buscarg"
                      className="form-control" 
                      placeholder="¿Que granja estas buscando?"   
                      aria-label="Amount (to the nearest dollar)" 
                      onChange={Buscarg}
                      />
                      <span className="input-group-text"><i className="fas fa-search"></i></span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-2" >
                    <Link to="/registro"><button type="button" className="btn-granja"><i className="fas fa-folder-plus"></i>  Registro </button></Link>
                  </div>
          </div>

          
          <div className="row cajasg">
            <div className="col-sm-12 col-md-12 col-lg-8 ">
              <div className="row ">
              {links.map (link => (
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="card cardgranjas" key={link.id }>
                    <div className="card-body infogranjas">
                      <img src={perfil} alt="" />
                      <h6 className="card-title">{link.granja}</h6>
                      <h7>Datos</h7>
                      <p className="card-text"><span>Propietario:</span> {link.nombrep} {link.apellidosp}</p>
                      <p className="card-text"><span>Ciudad:</span> {link.ciudad}</p>
                      <p className="card-text"><span>Dirección:</span> {link.direccion}</p>
                      <p className="card-text"><span>Datos de contacto:</span> {link.telefono} <br/> {link.celular}</p>
                      <p className="card-text"><span>Correo electrónico:</span> {link.correo}</p>
                      <p className="card-text"><span>Ruta:</span> {link.ruta}</p>
                      <div className="botoncard">
                        <button className="btn btn-primary" onClick={() => window.location.replace(`/registro/${link.id}`)}><i className="fas fa-pen"></i>   Editar</button>
                        <button className="btn btn-eliminar" onClick={() => onDeleteLink (link.id)}><i className="fas fa-trash-alt"></i>   Eliminar</button>
                      </div>
                    </div>
                  </div>
                
                </div>
               ))}
              </div>
           
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 granjasimg overflow-hidden">
              
            </div>
          </div> 
        </div>
 
          
      
    );
  }
  
  export default Granjas;
  