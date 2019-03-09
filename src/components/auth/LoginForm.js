import React, { Component } from 'react'
import { Button,Navbar,Nav,NavItem,NavDropdown,MenuItem,form,input } from 'react-bootstrap';
import './auth.css'


class LoginForm extends Component {
render(){
    return(
    <div className="Layout">
      <div className="card">
        <div className="card-header">
          <h3>Login</h3>
          <div className="d-flex justify-content-end social_icon">
            <span><i className="fab fa-facebook-square"></i></span>
            <span><i className="fab fa-google-plus-square"></i></span>
            <span><i className="fab fa-twitter-square"></i></span>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="padded-wrapper-login">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="username" />
            </div>
            <div className="padded-wrapper-login">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
              </div>
              <input type="password" className="form-control" placeholder="password" />
            </div>
            <div className="row align-items-center remember">
              <input type="checkbox" />Remember Me
            </div>
            <div className="form-group">
              <input type="submit" value="Login" className="btn float-right login_btn" />
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Don't have an account?<a href="/register">Sign Up</a>
          </div>
          <div className="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>)
        }
      }

export default LoginForm
