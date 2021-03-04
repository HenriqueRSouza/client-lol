import React from 'react'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from "./Login/Login"
import Lobby from './Lobby/Lobby'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/lobby" component={Lobby} />
      </Switch>

    </Router>
  );
}

export default App;
