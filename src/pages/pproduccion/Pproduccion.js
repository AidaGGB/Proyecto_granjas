import Header2 from '../../components/header2/Header2';
import Produccion from '../../components/produccion/Produccion';
import Footer from '../../components/footer/Footer';
import {db} from '../../firebase';
import React, {useEffect, useState} from "react";

function Pproduccion() {

   const [currentIdP, setCurrentIdP] = useState ('');
     
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
        <Header2 />
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
                  <div  className="col-sm-12 col-md-12 col-lg-4" key={link.id }>
                    <Produccion pid={link.id} pnom={link.granja} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 imgproduccion">
            
            </div>
          </div>
        </div>
        <Footer />       
      </div>
    );
  }
  
  export default Pproduccion;