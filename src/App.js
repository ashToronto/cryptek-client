import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'
import Cryptocurrency from './components/Cryptocurrency'
import Portfolio from './components/Portfolio'
import './App.css';
import Navigation from './components/Navigation'
import Login from './components/auth/LoginForm'
import Register from './components/auth/RegisterForm'
// import Auth from './modules/Auth'

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     auth: Auth.isUserAuthenticated()
  //   }
  // }

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
          <Route path='/register/' component={Register} />
          <Route path='/login/' component={Login} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
