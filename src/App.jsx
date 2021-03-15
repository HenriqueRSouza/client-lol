import React from 'react';
import './reset.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/index';
import Lobby from './pages/Lobby/index';
import Collect from './pages/Collect/index';
import Profile from './pages/Profile/Profile';
// import Jogar from './pages/Jogar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/collection" component={Collect} />
        <Route path="/perfil" component={Profile} />
        {/* <Route path="/jogar" component={Jogar} /> */}
      </Switch>
    </Router>
  );
}

export default App;
