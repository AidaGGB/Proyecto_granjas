import './App.css';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Index from './pages/index/Index';
import Inicios from './pages/inicios/Inicios';
import Pgranjas from './pages/pgranjas/Pgranjas';
import Phistorial from './pages/phistorial/Phistorial';
import Pmodificacion from './pages/pmodificacion/Pmodificacion';
import Pproduccion from './pages/pproduccion/Pproduccion';
import Pregistro from './pages/pregistro/Pregistro';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      
     <Router>
        <Switch>
            <Route exact path='/'sensitive>
              <Home/>
            </Route>

            <Route path='/inicios'sensitive>
              <Inicios/>
            </Route>

            <Route path='/index'>
              <Index/>
            </Route>

            <Route exact path='/granjas'>
              <Pgranjas/>
            </Route>

            <Route exact path='/produccion'>
              <Pproduccion/>
            </Route>

            <Route exact path='/historial'>
              <Phistorial/>
            </Route>

            <Route exact path='/modificar'>
              <Pmodificacion/>
            </Route>

            <Route exact path='/registro'>
              <Pregistro/>
            </Route>


            <Route path='*'>
              <Error/>
            </Route>
        </Switch>
      </Router>
    </div>    
  );
}

export default App;
