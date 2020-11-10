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
import Stays from './components/Stays'
import Map from './components/Map'
import Reviews from './components/Reviews'
import ShowReview from './components/ShowReview'
import NewReview from './components/NewReview'
import EditReview from './components/EditReview'
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
              <Route path='/thingsToDo' component={Stays}/>
              <Route path='/hosts/:id' component={ShowHost} />
              <Route path='/hosts' component={Hosts}/>
              <Route path='/destinations/:id' component={Show} />
              <Route path='/destinations' component={Destinations}/>
              <Route path='/map' component={Map}/>
              <Route path='/myAccount' component={MyAccount}/>
              <Route path='/signup' component={Signup}/>
              <Route path='/newReview' component={NewReview}/>
              <Route path='/editReview' component={EditReview}/>
              <Route path='/reviews/:id' component={ShowReview}/>
              <Route path='/reviews' component={Reviews}/>
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
