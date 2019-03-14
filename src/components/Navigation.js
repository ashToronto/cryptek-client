import React, {Component} from 'react';
import { Button,Navbar,Nav,NavItem,NavDropdown,MenuItem,form,input } from 'react-bootstrap';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom'
import Portfolio from './Portfolio'
import Login from './auth/LoginForm'
import Register from './auth/RegisterForm'

class Navigation extends Component {



  render() {
    return(
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">

        <div className="navbar-header">
          <a className="navbar-brand" href="#">Cryptex</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="#">Crypto News</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>

            <li className='btn btn-default navbar-btn'>
              <button className='fas fa-bars'></button>
            </li>

        </ul>
      </div>
    </nav>
  )}
}

export default Navigation;
