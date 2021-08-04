import './Error404.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Error404 () {
    return (
    <div className="container-fluid overflow-hidden">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="card card404">
                <Link to="/"><i className="fas fa-times-circle"></i></Link>
                <div className="card-body carderror">
                  <h1>¡OOPS!</h1>
                  <h1>ERROR 404</h1>
                  <h1>PÁGINA NO ENCONTRADA</h1>
                </div>
              </div>
                
                    
            </div>   
        </div>
    </div>

    

    );
  }
  
  export default Error404;