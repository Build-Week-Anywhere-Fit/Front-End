import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import './styles/App.css';
import Client from './components/Client/Client'
import ClientSignup from './components/Client/ClientSignup'
import {StyledHeader} from './styles/StyledClient'
import { Nav,  Udash } from './components';
import { PrivateRoute } from './utils';

function App() {
  return (
    <div className="App">
      <StyledHeader>
        <Link to={'/'}>Home</Link>
        <Link to={'/client/login'}>Client Login</Link>
        <Link to={'/client/signup'}>Client Signup</Link>
      </StyledHeader>

      <h1>Anywhere Fitness</h1>
      <Nav/>
      <Switch>
        <Route exact path='/client/login'>
          <Client />
        </Route>

        <Route exact path='/client/signup'>
          <ClientSignup />
        </Route>
        <Route>
        <PrivateRoute exact path="/udash" component={Udash} />
        </Route>

        <Route path='/'>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
