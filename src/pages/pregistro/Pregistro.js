import Header2 from '../../components/header2/Header2';
import Registro from '../../components/registro/Registro';
import Footer from '../../components/footer/Footer';
import {db} from '../../firebase';
import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

function Pregistro () {
  
  const [links,setlinks] = useState([])
  const {id} = useParams()
  
  //funcion que guarda y envia los datos a firebase, se llama con props en la funcion del componente//
  const addOrEditLink= async (linkObject)=>{// async funcion que trae el awwait para guardar los datos mientras se ejecuta otro codigo//
    await db.collection('links').doc().set(linkObject);//desde la bas de  datos de firebase crea una coleccion de nombre link que se guanda en un documento unico que trae desde link object//
  };

  

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
        <Registro {...{addOrEditLink, currentId: id, links}} />
        <Footer />       
      </div>
    );
  }
  
  export default Pregistro;