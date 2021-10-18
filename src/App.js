import React  from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import FormNda from './Components/FormNda';
import FormSpPmPf from './Components/FormSpPmPf';

import Home from "./pages/Home";


import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/form' component={FormSpPmPf}/>
      </Switch>
    </BrowserRouter> 
  )
  
}

export default App;
