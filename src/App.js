import './App.css';
import Error from './pages/error/Error';
import Home from './pages/home/Home';
import Index from './pages/index/Index';
import Inicios from './pages/inicios/Inicios';
import Pgranjas from './pages/pgranjas/Pgranjas';
import Phistorial from './pages/phistorial/Phistorial';
import Pproduccion from './pages/pproduccion/Pproduccion';
import Pregistro from './pages/pregistro/Pregistro';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      
     <Router basename={process.env.PUBLIC_URL}>
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

            <Route path='/granjas'>
              <Pgranjas/>
            </Route>

            <Route path='/produccion'>
              <Pproduccion/>
            </Route>

            <Route path='/historial'>
              <Phistorial/>
            </Route>

            <Route path='/registro/:id'>{/* desde esta ruta envio el parametro por url*/}
              <Pregistro/>
            </Route>

            <Route path='/registro'>
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
