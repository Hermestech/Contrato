import React  from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Form from './pages/Form';
import Home from "./pages/Home";
import Error404 from './Components/Error404';



const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/Form/:name' component={Form}/>
        <Route path='*' component={Error404} />
      </Switch>
    </BrowserRouter> 
  )
  
}

export default App;
