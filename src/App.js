import React from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Login from './Pages/Login';
import UserList from './Pages/UserList';
import UserEdit from './Pages/UserEdit';
import ClippedDrawer from './Components/dashboard';

function App() {
  return (
  <BrowserRouter>
  <Switch>
  <Route exact path="/">
  <Redirect  to="/dashboard" />
  </Route>
  <Route exact path="/dashboard" component={ClippedDrawer}  active/>
  <Route exact path="/users" component={UserList} /> 
  <Route exact path="/user/:id" component={UserEdit} ><UserEdit/></Route> 
  
  </Switch>
  </BrowserRouter>
  );
}

export default App;
