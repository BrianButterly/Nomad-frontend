import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Login from './components/Login';
import Home from './components/Home';
import Hosts from './components/Hosts';
import Destinations from './components/Destinations';
import MyAccount from './components/MyAccount';
import Signup from './components/Signup';
import NoMatch from './components/NoMatch'
import Show from './components/Show'
import ShowHost from './components/ShowHost'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Route render={({location}) => (
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'}
          >
          <section section className="route-section">
            <Switch>
              <Route path='/login' component={Login}/>
              <Route path='/home' component={Home}/>
              <Route path='/hosts/:id' component={ShowHost} />
              <Route path='/hosts' component={Hosts}/>
              <Route path='/destinations/:id' component={Show} />
              <Route path='/destinations' component={Destinations}/>
              <Route path='/myAccount' component={MyAccount}/>
              <Route path='/Signup' component={Signup}/>
              <Route exact path='/' component={Login} />
              <Route path='*' component={NoMatch} />
            </Switch>
          </section>
          </CSSTransition>
        </TransitionGroup>
        )} />
      </div>
    </BrowserRouter>
  );
}

export default App;
