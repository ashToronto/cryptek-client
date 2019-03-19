import React, { Component } from 'react'
import { Button,Navbar,Nav,NavItem,NavDropdown,MenuItem,form,input } from 'react-bootstrap';
import './auth.css'
import Auth from '../modules/Auth'


class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        username: '',
        password: '',
      auth: Auth.isUserAuthenticated()
    }
  }

  // Login - will be refactored for react architecture in future
  handleSubmit = (e) => {
    e.preventDefault()
    const username_login = e.target.username.value
    const password_login = e.target.password.value
    console.log(username_login + " " + password_login)
    this.setState({
        username: username_login,
        password: password_login,
    })
    return fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
          username: username_login,
          password: password_login,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .then(res => {
      console.log(res)
    }).catch(err => console.log(err));
  }

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
          <form onSubmit={this.handleSubmit}>

            <div className="padded-wrapper-login">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
              </div>
              <input type="text" name="username" className="form-control" placeholder="username" />
            </div>

            <div className="padded-wrapper-login">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
              </div>
              <input type="password" name="password" className="form-control" placeholder="password" />
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
