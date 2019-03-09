import React, { Component } from 'react'
import { Button,Navbar,Nav,NavItem,NavDropdown,MenuItem,form,input } from 'react-bootstrap';
import './auth.css'


class RegisterForm extends Component {
render(){
    return(
    <div className="Layout">
      <div className="card">
        <div className="card-header"><br></br>
          <h3>Create an Account</h3>
          <div className="d-flex justify-content-end social_icon">
            <span><i className="fab fa-facebook-square"></i></span>
            <span><i className="fab fa-google-plus-square"></i></span>
            <span><i className="fab fa-twitter-square"></i></span>
          </div>
        </div>
        <div className="card-body">
          <form>

            <div className="padded-wrapper-register">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="Username" />
            </div>

            <div className="padded-wrapper-register">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="Full name" />
            </div>

            <div className="padded-wrapper-register">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-at"></i></span>
              </div>
              <input type="text" className="form-control" placeholder="Email" />
            </div>

            <div className="padded-wrapper-register">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-key"></i></span>
              </div>
              <input type="password" className="form-control" placeholder="Password" />
            </div>

            <div className="padded-wrapper-register">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-check"></i></span>
              </div>
              <input type="password" className="form-control" placeholder="Confirm password" />
            </div>

            <div className="row align-items-center remember">
              <input type="checkbox" />Remember Me
            </div>
            <div className="form-group">
              <input type="submit" value="Register" className="btn float-right login_btn" />
            </div>

          </form>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Already have an account<a href="/login">Login</a>
          </div>
          <div className="d-flex justify-content-center">
          </div>
        </div>
      </div>
    </div>)
        }
      }

export default RegisterForm
