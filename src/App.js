import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'
import Cryptocurrency from './components/Cryptocurrency'
import Portfolio from './components/Portfolio'
import './App.css';
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <div className="fixed-navbar">
          <Navigation />
        </div>
        <Router>
          <Switch>
          <Route exact path='/' component={Cryptocurrency} />
          <Route path='/portfolio/' component={Portfolio} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
