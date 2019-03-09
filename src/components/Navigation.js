import React, {Component} from 'react';
import { Button,Navbar,Nav,NavItem,NavDropdown,MenuItem,form,input } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'
import Auth from '../modules/Auth'
import Portfolio from './Portfolio'
import Login from './auth/LoginForm'
import Register from './auth/RegisterForm'


class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      auth: Auth.isUserAuthenticated(),
    }
  }

  render() {
    return(
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Cryptex</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Home</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="#">Crypto News</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </nav>
  )}
}

export default Navigation;
