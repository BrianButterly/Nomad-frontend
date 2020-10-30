import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Login from './components/Login';
import Home from './components/Home';
import Hosts from './components/Hosts';
import Destinations from './components/Destinations';
import MyAccount from './components/MyAccount';
import { Switch, Route } from 'react-router-dom';
import {  } from 'react-bootstrap';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/home' component={Home}/>
        <Route path='/hosts' component={Hosts}/>
        <Route path='/destinations' component={Destinations}/>
        <Route path='/myAccount' component={MyAccount}/>
        <Route exact path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
