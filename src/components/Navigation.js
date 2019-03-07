import React, {Component} from 'react';
import { Button,Navbar,Nav,NavItem,NavDropdown,MenuItem,form,input } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return(
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Cryptex</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </nav>
  )}
}

export default Navigation;
