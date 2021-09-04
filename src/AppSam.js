import React from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Login from './Pages/Login';

function App() {
  return (
  <BrowserRouter>
  <Switch>
  <Route exact path="/">
  <Redirect  to="/login" />
  </Route>
  <Route exact path="/login" component={Login} /> 
  <Route path="*" render={()=> "404 Not Found"} /> 
  </Switch>
  </BrowserRouter>
  );
}

export default App;
