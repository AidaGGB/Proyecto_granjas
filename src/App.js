
import './App.css';
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
      
     <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path='/formulario'sensitive>
              <Formulario/>
            </Route>

            <Route path='/nineras'sensitive>
              <Nineras/>
            </Route>

            <Route exact path='/'>
              <Home/>
            </Route>

            <Route exact path='/home'>
              <Home/>
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
